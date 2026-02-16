package output

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io"

	"github.com/olekukonko/tablewriter"
	"go.yaml.in/yaml/v3"
)

// RenderRows renders a generic table-like dataset in table/json/csv formats.
//
// - For table/csv, headers+rows are used.
// - For json, jsonValue is marshaled and printed (pretty).
// RenderRows renders a generic table-like dataset in table/json/csv/yaml formats.
//
// - For table/csv, headers+rows are used.
// - For json/yaml, jsonValue is marshaled and printed (pretty).
func RenderRows(w io.Writer, format Format, headers []string, rows [][]any, jsonValue any) error {
	switch format {
	case FormatJSON:
		return renderAnyJSON(w, jsonValue)
	case FormatYAML:
		return renderAnyYAML(w, jsonValue)
	case FormatCSV:
		return renderRowsCSV(w, headers, rows)
	case FormatTable:
		fallthrough
	default:
		return renderRowsTable(w, headers, rows)
	}
}

func renderRowsTable(w io.Writer, headers []string, rows [][]any) error {
	table := tablewriter.NewWriter(w)
	table.Header(headers)
	if err := table.Bulk(rows); err != nil {
		return err
	}
	return table.Render()
}

func renderAnyYAML(w io.Writer, v any) error {
	if v == nil {
		v = []any{}
	}
	return yaml.NewEncoder(w).Encode(v)
}

func renderAnyJSON(w io.Writer, v any) error {
	if v == nil {
		v = []any{}
	}
	b, err := json.MarshalIndent(v, "", "  ")
	if err != nil {
		return err
	}
	_, err = w.Write(append(b, '\n'))
	return err
}

func renderRowsCSV(w io.Writer, headers []string, rows [][]any) error {
	cw := csv.NewWriter(w)
	defer cw.Flush()

	if len(headers) > 0 {
		if err := cw.Write(headers); err != nil {
			return err
		}
	}

	for _, row := range rows {
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
