package cmd

import "testing"

func TestTaskManagerHealthSummaryTable(t *testing.T) {
	health := map[string]any{
		"id":          "abc",
		"timestamp":   "2025-03-21T21:30:04.780Z",
		"last_update": "2025-03-21T21:30:04.455Z",
		"status":      "OK",
		"stats": map[string]any{
			"configuration": map[string]any{
				"status": "OK",
				"value": map[string]any{
					"poll_interval":    float64(500),
					"request_capacity": float64(1000),
					"capacity": map[string]any{
						"config":     float64(10),
						"as_workers": float64(10),
						"as_cost":    float64(20),
					},
				},
			},
			"runtime": map[string]any{
				"status": "OK",
				"value": map[string]any{
					"polling": map[string]any{
						"last_successful_poll": "2025-03-21T21:30:04.455Z",
					},
				},
			},
			"workload": map[string]any{
				"status": "OK",
				"value": map[string]any{
					"count":        float64(42),
					"cost":         float64(84),
					"overdue":      float64(0),
					"overdue_cost": float64(0),
				},
			},
			"capacity_estimation": map[string]any{
				"status": "OK",
				"reason": "healthy",
				"value": map[string]any{
					"observed": map[string]any{
						"observed_kibana_instances": float64(1),
					},
					"proposed": map[string]any{
						"min_required_kibana": float64(1),
					},
				},
			},
		},
	}

	headers, rows := taskManagerHealthSummaryTable(health)
	if len(headers) != 2 || headers[0] != "key" || headers[1] != "value" {
		t.Fatalf("unexpected headers: %#v", headers)
	}

	m := map[string]any{}
	for _, r := range rows {
		if len(r) != 2 {
			t.Fatalf("unexpected row len: %#v", r)
		}
		k, _ := r[0].(string)
		m[k] = r[1]
	}

	// Spot-check a few critical fields.
	if m["status"] != "OK" {
		t.Fatalf("status mismatch: %#v", m["status"])
	}
	if m["stats.configuration.status"] != "OK" {
		t.Fatalf("stats.configuration.status mismatch: %#v", m["stats.configuration.status"])
	}
	if m["stats.configuration.value.poll_interval_ms"] != int64(500) {
		t.Fatalf("poll_interval mismatch: %#v", m["stats.configuration.value.poll_interval_ms"])
	}
	if m["stats.workload.value.count"] != int64(42) {
		t.Fatalf("workload count mismatch: %#v", m["stats.workload.value.count"])
	}
	if m["stats.capacity_estimation.reason"] != "healthy" {
		t.Fatalf("capacity reason mismatch: %#v", m["stats.capacity_estimation.reason"])
	}
}
