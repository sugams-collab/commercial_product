# Tauri vs Electron Comparison (Notes)

This document summarizes areas to evaluate after building and running both desktop wrappers.

Metrics to measure:

- Bundle size: compare final executable/app bundle size for Tauri and Electron.
- RAM usage: measure resident memory while idle and under load.
- CPU usage: measure during startup and during heavy UI actions.
- Startup speed: time from click to interactive UI.
- Build complexity: toolchain & steps required.
- Developer Experience (DX): hot reload, debugging, packaging.

Preliminary expectations:

- Tauri typically yields smaller bundles because it uses the OS webview and Rust backend, but it requires Rust toolchain to build.
- Electron bundles Chromium + Node which increases bundle size but has rich ecosystem and easier JS-only tooling.

Suggested tests:

1. Dev hot reload: run frontend dev server and use the wrapper dev mode (Tauri dev / Electron pointing to dev server). Measure iteration time.
2. Production startup: build frontend, package backend, and run packaged app; time startup and measure memory.
3. IPC & API: test local HTTP calls and any IPC channels for background tasks.

Collect results under `measurements/` with reproducible commands and environment notes.
