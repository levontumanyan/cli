package cmd

import (
	"fmt"
	"strings"
)

func dashboardListTable(dashboards []map[string]any) ([]string, [][]any) {
	headers := []string{"id", "title", "description", "tags", "updated_at", "updated_by"}
	rows := make([][]any, 0, len(dashboards))

	for _, d := range dashboards {
		id, _ := d["id"].(string)
		data, _ := d["data"].(map[string]any)
		meta, _ := d["meta"].(map[string]any)

		title := ""
		description := ""
		tags := ""
		if data != nil {
			title, _ = data["title"].(string)
			description, _ = data["description"].(string)
			if tagSlice, ok := data["tags"].([]any); ok {
				parts := make([]string, 0, len(tagSlice))
				for _, t := range tagSlice {
					parts = append(parts, fmt.Sprint(t))
				}
				tags = strings.Join(parts, ", ")
			}
		}

		updatedAt := ""
		updatedBy := ""
		if meta != nil {
			updatedAt, _ = meta["updated_at"].(string)
			updatedBy, _ = meta["updated_by"].(string)
		}

		rows = append(rows, []any{id, title, description, tags, updatedAt, updatedBy})
	}

	return headers, rows
}

func dashboardGetTable(dashboard map[string]any) ([]string, [][]any) {
	rows := make([][]any, 0, 8)

	add := func(k string, v any) {
		if v == nil {
			return
		}
		if s, ok := v.(string); ok && s == "" {
			return
		}
		rows = append(rows, []any{k, v})
	}

	add("id", dashboard["id"])

	if data, ok := dashboard["data"].(map[string]any); ok {
		add("title", data["title"])
		add("description", data["description"])
		if tagSlice, ok := data["tags"].([]any); ok && len(tagSlice) > 0 {
			parts := make([]string, 0, len(tagSlice))
			for _, t := range tagSlice {
				parts = append(parts, fmt.Sprint(t))
			}
			add("tags", strings.Join(parts, ", "))
		}
		if tr, ok := data["time_range"].(map[string]any); ok {
			add("time_range.from", tr["from"])
			add("time_range.to", tr["to"])
		}
	}

	if meta, ok := dashboard["meta"].(map[string]any); ok {
		add("version", meta["version"])
		add("managed", meta["managed"])
		add("created_at", meta["created_at"])
		add("created_by", meta["created_by"])
		add("updated_at", meta["updated_at"])
		add("updated_by", meta["updated_by"])
	}

	return []string{"key", "value"}, rows
}
