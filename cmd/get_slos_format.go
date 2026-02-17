package cmd

import (
	"fmt"
	"sort"
	"strings"
)

func slosHeaders() []string {
	return []string{"name", "id", "enabled", "target", "time_window"}
}

func filterSLOs(in []map[string]any, patterns []string) []map[string]any {
	out := make([]map[string]any, 0, len(in))
	for _, slo := range in {
		name := sloName(slo)
		id := sloID(slo)
		if matchesAny(name, patterns) || (id != "" && matchesAny(id, patterns)) {
			out = append(out, slo)
		}
	}

	sort.SliceStable(out, func(i, j int) bool {
		ni := strings.ToLower(sloName(out[i]))
		nj := strings.ToLower(sloName(out[j]))
		if ni == nj {
			return sloID(out[i]) < sloID(out[j])
		}
		return ni < nj
	})

	return out
}

func slosRows(slos []map[string]any) [][]any {
	rows := make([][]any, 0, len(slos))
	for _, slo := range slos {
		rows = append(rows, []any{
			sloName(slo),
			sloID(slo),
			sloEnabled(slo),
			sloTarget(slo),
			sloTimeWindow(slo),
		})
	}
	return rows
}

func sloID(m map[string]any) string {
	if s, ok := m["id"].(string); ok {
		return s
	}
	if s, ok := m["sloId"].(string); ok {
		return s
	}
	return ""
}

func sloName(m map[string]any) string {
	if s, ok := m["name"].(string); ok {
		return s
	}
	// Fallback: some shapes may only have the saved object title.
	if s, ok := m["title"].(string); ok {
		return s
	}
	return ""
}

func sloEnabled(m map[string]any) any {
	if b, ok := m["enabled"].(bool); ok {
		return b
	}
	if b, ok := m["isEnabled"].(bool); ok {
		return b
	}
	return nil
}

func sloTarget(m map[string]any) any {
	obj, ok := m["objective"].(map[string]any)
	if !ok {
		return nil
	}
	switch v := obj["target"].(type) {
	case float64:
		return v
	case int:
		return float64(v)
	default:
		return nil
	}
}

func sloTimeWindow(m map[string]any) any {
	tw, ok := m["timeWindow"].(map[string]any)
	if !ok {
		return nil
	}
	twType, _ := tw["type"].(string)
	dur, _ := tw["duration"].(string)
	if twType == "" && dur == "" {
		return nil
	}
	if twType == "" {
		return dur
	}
	if dur == "" {
		return twType
	}
	return fmt.Sprintf("%s/%s", twType, dur)
}
