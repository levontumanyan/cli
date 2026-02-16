package config

import (
	"errors"
	"fmt"
	"io/fs"
	"os"
	"path/filepath"

	"go.yaml.in/yaml/v3"
)

const (
	dirName      = ".ectl"
	configName   = "config.yaml"
	dirPerms     = 0o700
	configPerms  = 0o600
	backupSuffix = ".bak"
)

type Context struct {
	CloudID          string `yaml:"cloud_id,omitempty"`
	APIKey           string `yaml:"api_key,omitempty"`
	ElasticsearchURL string `yaml:"elasticsearch_url,omitempty"`
}

type Config struct {
	CurrentContext string             `yaml:"current-context,omitempty"`
	Contexts       map[string]Context `yaml:"contexts,omitempty"`
}

func DefaultPath() (string, error) {
	home, err := os.UserHomeDir()
	if err != nil {
		return "", fmt.Errorf("get home dir: %w", err)
	}
	return filepath.Join(home, dirName, configName), nil
}

func Load(path string) (Config, error) {
	b, err := os.ReadFile(path)
	if err != nil {
		if errors.Is(err, fs.ErrNotExist) {
			return Config{Contexts: map[string]Context{}}, nil
		}
		return Config{}, fmt.Errorf("read config: %w", err)
	}

	var cfg Config
	if err := yaml.Unmarshal(b, &cfg); err != nil {
		return Config{}, fmt.Errorf("parse yaml: %w", err)
	}
	if cfg.Contexts == nil {
		cfg.Contexts = map[string]Context{}
	}
	return cfg, nil
}

func Save(path string, cfg Config) error {
	if cfg.Contexts == nil {
		cfg.Contexts = map[string]Context{}
	}

	dir := filepath.Dir(path)
	if err := os.MkdirAll(dir, dirPerms); err != nil {
		return fmt.Errorf("create config dir: %w", err)
	}

	out, err := yaml.Marshal(&cfg)
	if err != nil {
		return fmt.Errorf("marshal yaml: %w", err)
	}

	tmp := path + ".tmp"
	if err := os.WriteFile(tmp, out, configPerms); err != nil {
		return fmt.Errorf("write temp config: %w", err)
	}

	// Best-effort backup before replace.
	if _, err := os.Stat(path); err == nil {
		_ = copyFile(path, path+backupSuffix, configPerms)
	}

	if err := os.Rename(tmp, path); err != nil {
		_ = os.Remove(tmp)
		return fmt.Errorf("replace config: %w", err)
	}
	return nil
}

func copyFile(src, dst string, mode fs.FileMode) error {
	b, err := os.ReadFile(src)
	if err != nil {
		return err
	}
	return os.WriteFile(dst, b, mode)
}
