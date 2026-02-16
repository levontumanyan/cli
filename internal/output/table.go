package output

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"
	"strings"

	"github.com/elastic/ectl/internal/client"

	"github.com/olekukonko/tablewriter"
	"go.yaml.in/yaml/v3"
)

type Format string

const (
	FormatTable Format = "table"
	FormatJSON  Format = "json"
	FormatCSV   Format = "csv"
	FormatYAML  Format = "yaml"
)

func NormalizeFormat(s string) Format {
	s = strings.ToLower(strings.TrimSpace(s))
	switch Format(s) {
	case FormatTable, FormatJSON, FormatCSV, FormatYAML:
		return Format(s)
	default:
		return FormatTable
	}
}

// RenderOpts controls optional rendering behaviour.
type RenderOpts struct {
	OmitNull bool // drop null-valued fields from output
}

func Render(w io.Writer, format Format, parsed client.ESQLResponse, rawJSON []byte, opts RenderOpts) error {
	if opts.OmitNull {
		parsed = stripNulls(parsed)
	}

	switch format {
	case FormatJSON:
		if opts.OmitNull {
			return renderJSON(w, parsed, nil) // re-marshal from parsed data with nulls stripped
		}
		return renderJSON(w, parsed, rawJSON)
	case FormatCSV:
		return renderCSV(w, parsed)
	case FormatYAML:
		return renderYAML(w, parsed, opts.OmitNull)
	case FormatTable:
		fallthrough
	default:
		return renderTable(w, parsed)
	}
}

// stripNulls removes columns that are entirely null and drops null values
// from each row so that record-oriented formats (JSON/YAML) omit the keys.
func stripNulls(resp client.ESQLResponse) client.ESQLResponse {
	if len(resp.Columns) == 0 {
		return resp
	}

	// Determine which column indices have at least one non-null value.
	keep := make([]bool, len(resp.Columns))
	for _, row := range resp.Values {
		for i, v := range row {
			if i < len(keep) && v != nil {
				keep[i] = true
			}
		}
	}

	// Build filtered columns.
	var cols []client.ESQLColumn
	var indices []int
	for i, ok := range keep {
		if ok {
			cols = append(cols, resp.Columns[i])
			indices = append(indices, i)
		}
	}

	// Build filtered rows.
	rows := make([][]any, 0, len(resp.Values))
	for _, row := range resp.Values {
		newRow := make([]any, 0, len(indices))
		for _, idx := range indices {
			if idx < len(row) {
				newRow = append(newRow, row[idx])
			} else {
				newRow = append(newRow, nil)
			}
		}
		rows = append(rows, newRow)
	}

	resp.Columns = cols
	resp.Values = rows
	return resp
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

func renderYAML(w io.Writer, resp client.ESQLResponse, omitNull bool) error {
	// Convert columnar ES|QL response into a list of maps for readable YAML.
	records := make([]map[string]any, 0, len(resp.Values))
	for _, row := range resp.Values {
		m := make(map[string]any, len(resp.Columns))
		for i, col := range resp.Columns {
			if i < len(row) {
				if omitNull && row[i] == nil {
					continue
				}
				m[col.Name] = row[i]
			}
		}
		records = append(records, m)
	}
	return yaml.NewEncoder(w).Encode(records)
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

	return cw.Error()
}
