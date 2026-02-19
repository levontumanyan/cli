package cmd

import (
	"fmt"
	"strings"
)

// --- Agents table ---

func abAgentHeaders() []string {
	return []string{"id", "name", "description", "labels"}
}

func abAgentRows(items []map[string]any) [][]any {
	rows := make([][]any, 0, len(items))
	for _, m := range items {
		rows = append(rows, []any{
			mapStr(m, "id"),
			mapStr(m, "name"),
			truncate(mapStr(m, "description"), 60),
			joinStringSlice(m, "labels"),
		})
	}
	return rows
}

// --- Tools table ---

func abToolHeaders() []string {
	return []string{"id", "type", "description", "tags"}
}

func abToolRows(items []map[string]any) [][]any {
	rows := make([][]any, 0, len(items))
	for _, m := range items {
		rows = append(rows, []any{
			mapStr(m, "id"),
			mapStr(m, "type"),
			truncate(mapStr(m, "description"), 60),
			joinStringSlice(m, "tags"),
		})
	}
	return rows
}

// --- Conversations table ---

func abConversationHeaders() []string {
	return []string{"id", "title", "agent_id", "updated_at"}
}

func abConversationRows(items []map[string]any) [][]any {
	rows := make([][]any, 0, len(items))
	for _, m := range items {
		rows = append(rows, []any{
			mapStr(m, "id"),
			mapStr(m, "title"),
			mapStr(m, "agent_id"),
			mapStr(m, "updated_at"),
		})
	}
	return rows
}

// --- helpers ---

func mapStr(m map[string]any, key string) string {
	if v, ok := m[key]; ok {
		return fmt.Sprint(v)
	}
	return ""
}

func joinStringSlice(m map[string]any, key string) string {
	v, ok := m[key]
	if !ok {
		return ""
	}
	switch s := v.(type) {
	case []any:
		parts := make([]string, 0, len(s))
		for _, item := range s {
			parts = append(parts, fmt.Sprint(item))
		}
		return strings.Join(parts, ", ")
	case []string:
		return strings.Join(s, ", ")
	default:
		return fmt.Sprint(v)
	}
}

func truncate(s string, max int) string {
	if len(s) <= max {
		return s
	}
	if max <= 3 {
		return s[:max]
	}
	return s[:max-3] + "..."
}
