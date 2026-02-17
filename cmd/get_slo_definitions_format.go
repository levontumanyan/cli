package cmd

import (
	"fmt"
	"sort"
	"strings"
)

func sloDefinitionsHeaders() []string {
	return []string{"name", "id", "enabled", "target", "time_window", "indicator_type", "budgeting_method"}
}

func filterSLODefinitions(in []map[string]any, patterns []string) []map[string]any {
	out := make([]map[string]any, 0, len(in))
	for _, so := range in {
		name := sloDefName(so)
		id := sloDefID(so)
		if matchesAny(name, patterns) || (id != "" && matchesAny(id, patterns)) {
			out = append(out, so)
		}
	}

	sort.SliceStable(out, func(i, j int) bool {
		ni := strings.ToLower(sloDefName(out[i]))
		nj := strings.ToLower(sloDefName(out[j]))
		if ni == nj {
			return sloDefID(out[i]) < sloDefID(out[j])
		}
		return ni < nj
	})

	return out
}

func sloDefinitionsRows(defs []map[string]any) [][]any {
	rows := make([][]any, 0, len(defs))
	for _, so := range defs {
		rows = append(rows, []any{
			sloDefName(so),
			sloDefID(so),
			sloDefEnabled(so),
			sloDefTarget(so),
			sloDefTimeWindow(so),
			sloDefIndicatorType(so),
			sloDefBudgetingMethod(so),
		})
	}
	return rows
}

func sloDefID(so map[string]any) string {
	if s, ok := so["id"].(string); ok {
		return s
	}
	return ""
}

func sloDefAttrs(so map[string]any) map[string]any {
	if a, ok := so["attributes"].(map[string]any); ok {
		return a
	}
	return nil
}

func sloDefName(so map[string]any) string {
	a := sloDefAttrs(so)
	if a == nil {
		return ""
	}
	if s, ok := a["name"].(string); ok {
		return s
	}
	if s, ok := a["title"].(string); ok {
		return s
	}
	return ""
}

func sloDefEnabled(so map[string]any) any {
	a := sloDefAttrs(so)
	if a == nil {
		return nil
	}
	if b, ok := a["enabled"].(bool); ok {
		return b
	}
	if b, ok := a["isEnabled"].(bool); ok {
		return b
	}
	return nil
}

func sloDefBudgetingMethod(so map[string]any) any {
	a := sloDefAttrs(so)
	if a == nil {
		return nil
	}
	if s, ok := a["budgetingMethod"].(string); ok {
		return s
	}
	if s, ok := a["budgeting_method"].(string); ok {
		return s
	}
	return nil
}

func sloDefIndicatorType(so map[string]any) any {
	a := sloDefAttrs(so)
	if a == nil {
		return nil
	}
	ind, ok := a["indicator"].(map[string]any)
	if !ok {
		return nil
	}
	if s, ok := ind["type"].(string); ok {
		return s
	}
	return nil
}

func sloDefTarget(so map[string]any) any {
	a := sloDefAttrs(so)
	if a == nil {
		return nil
	}
	obj, ok := a["objective"].(map[string]any)
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

func sloDefTimeWindow(so map[string]any) any {
	a := sloDefAttrs(so)
	if a == nil {
		return nil
	}
	tw, ok := a["timeWindow"].(map[string]any)
	if !ok {
		// Some older versions used snake_case.
		tw, ok = a["time_window"].(map[string]any)
		if !ok {
			return nil
		}
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
