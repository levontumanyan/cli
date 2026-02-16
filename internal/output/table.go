package output

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"strings"

	"ectl/internal/client"

	"github.com/olekukonko/tablewriter"
)

type Format string

const (
	FormatTable Format = "table"
	FormatJSON  Format = "json"
	FormatCSV   Format = "csv"
)

func NormalizeFormat(s string) Format {
	switch Format(strings.ToLower(strings.TrimSpace(s))) {
	case FormatTable, FormatJSON, FormatCSV:
		return Format(strings.ToLower(strings.TrimSpace(s)))
	default:
		return FormatTable
	}
}

func Render(w io.Writer, format Format, parsed client.ESQLResponse, rawJSON []byte) error {
	switch format {
	case FormatJSON:
		return renderJSON(w, parsed, rawJSON)
	case FormatCSV:
		return renderCSV(w, parsed)
	case FormatTable:
		fallthrough
	default:
		return renderTable(w, parsed)
	}
}

func renderTable(w io.Writer, resp client.ESQLResponse) error {
	headers := make([]string, 0, len(resp.Columns))
	for _, c := range resp.Columns {
		headers = append(headers, c.Name)
	}

	table := tablewriter.NewWriter(w)
	table.Header(headers)
	if err := table.Bulk(resp.Values); err != nil {
		return err
	}
	return table.Render()
}

func renderJSON(w io.Writer, parsed client.ESQLResponse, raw []byte) error {
	// If we already have JSON, pretty-print it; otherwise marshal parsed struct.
	if len(raw) == 0 {
		b, err := json.MarshalIndent(parsed, "", "  ")
		if err != nil {
			return err
		}
		_, err = w.Write(append(b, '\n'))
		return err
	}

	var v any
	if err := json.Unmarshal(raw, &v); err != nil {
		_, err2 := w.Write(append(raw, '\n'))
		if err2 != nil {
			return err2
		}
		return nil
	}

	b, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}
	_, err = w.Write(append(b, '\n'))
	return err
}

func renderCSV(w io.Writer, resp client.ESQLResponse) error {
	cw := csv.NewWriter(w)
	defer cw.Flush()

	headers := make([]string, 0, len(resp.Columns))
	for _, c := range resp.Columns {
		headers = append(headers, c.Name)
	}
	if err := cw.Write(headers); err != nil {
		return err
	}

	for _, row := range resp.Values {
		out := make([]string, len(headers))
		for i := range out {
			if i >= len(row) || row[i] == nil {
				out[i] = ""
				continue
			}
			out[i] = fmt.Sprint(row[i])
		}
		if err := cw.Write(out); err != nil {
			return err
		}
	}

	if err := cw.Error(); err != nil {
		return err
	}
	return nil
}
