package cmd

import (
	"fmt"
	"sort"
)

func taskManagerHealthSummaryTable(health map[string]any) ([]string, [][]any) {
	rows := make([][]any, 0, 16)

	add := func(k string, v any) {
		if isEmptySummaryValue(v) {
			return
		}
		rows = append(rows, []any{k, v})
	}

	// Top-level fields
	add("status", getString(health, "status"))
	add("timestamp", getString(health, "timestamp"))
	add("last_update", getString(health, "last_update"))
	add("id", getString(health, "id"))

	// stats.*.status + a few high-signal values
	add("stats.configuration.status", getNestedString(health, "stats", "configuration", "status"))
	add("stats.configuration.value.poll_interval_ms", getNestedNumber(health, "stats", "configuration", "value", "poll_interval"))
	add("stats.configuration.value.request_capacity", getNestedNumber(health, "stats", "configuration", "value", "request_capacity"))
	add("stats.configuration.value.capacity.config", getNestedNumber(health, "stats", "configuration", "value", "capacity", "config"))
	add("stats.configuration.value.capacity.as_workers", getNestedNumber(health, "stats", "configuration", "value", "capacity", "as_workers"))
	add("stats.configuration.value.capacity.as_cost", getNestedNumber(health, "stats", "configuration", "value", "capacity", "as_cost"))

	add("stats.runtime.status", getNestedString(health, "stats", "runtime", "status"))
	add("stats.runtime.value.polling.last_successful_poll", getNestedString(health, "stats", "runtime", "value", "polling", "last_successful_poll"))

	add("stats.workload.status", getNestedString(health, "stats", "workload", "status"))
	add("stats.workload.value.count", getNestedNumber(health, "stats", "workload", "value", "count"))
	add("stats.workload.value.cost", getNestedNumber(health, "stats", "workload", "value", "cost"))
	add("stats.workload.value.overdue", getNestedNumber(health, "stats", "workload", "value", "overdue"))
	add("stats.workload.value.overdue_cost", getNestedNumber(health, "stats", "workload", "value", "overdue_cost"))

	add("stats.capacity_estimation.status", getNestedString(health, "stats", "capacity_estimation", "status"))
	add("stats.capacity_estimation.reason", getNestedString(health, "stats", "capacity_estimation", "reason"))
	add("stats.capacity_estimation.value.observed.observed_kibana_instances", getNestedNumber(health, "stats", "capacity_estimation", "value", "observed", "observed_kibana_instances"))
	add("stats.capacity_estimation.value.proposed.min_required_kibana", getNestedNumber(health, "stats", "capacity_estimation", "value", "proposed", "min_required_kibana"))

	// Keep output stable: if Kibana adds new fields we include them only if we explicitly add them above.
	// However, reorder the rows we did add so they are always in the same order even if we skip empties.
	order := map[string]int{}
	for i, r := range rows {
		if len(r) > 0 {
			if k, ok := r[0].(string); ok {
				order[k] = i
			}
		}
	}
	sort.SliceStable(rows, func(i, j int) bool {
		ki, _ := rows[i][0].(string)
		kj, _ := rows[j][0].(string)
		oi, ok := order[ki]
		if !ok {
			oi = 1 << 30
		}
		oj, ok := order[kj]
		if !ok {
			oj = 1 << 30
		}
		if oi == oj {
			return fmt.Sprint(ki) < fmt.Sprint(kj)
		}
		return oi < oj
	})

	return []string{"key", "value"}, rows
}

func getString(m map[string]any, key string) string {
	if m == nil {
		return ""
	}
	if s, ok := m[key].(string); ok {
		return s
	}
	return ""
}

func getNestedString(root map[string]any, path ...string) string {
	v := getNestedAny(root, path...)
	s, _ := v.(string)
	return s
}

func getNestedNumber(root map[string]any, path ...string) any {
	v := getNestedAny(root, path...)
	switch n := v.(type) {
	case float64:
		// encoding/json uses float64 for numbers. Render integers without trailing .0.
		if n == float64(int64(n)) {
			return int64(n)
		}
		return n
	case int:
		return int64(n)
	case int64:
		return n
	case nil:
		return nil
	default:
		return v
	}
}

func getNestedAny(root map[string]any, path ...string) any {
	var cur any = root
	for _, p := range path {
		m, ok := cur.(map[string]any)
		if !ok || m == nil {
			return nil
		}
		cur = m[p]
	}
	return cur
}

func isEmptySummaryValue(v any) bool {
	if v == nil {
		return true
	}
	switch x := v.(type) {
	case string:
		return x == ""
	}
	return false
}
