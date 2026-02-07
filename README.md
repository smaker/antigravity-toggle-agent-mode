[English](README.md) | [한국어](README.ko.md)

# Antigravity Mode Toggle Extension

This extension allows you to quickly toggle between **Fast** mode and **Planning** mode of **Antigravity AI Agent** using keyboard shortcuts.

## 🚀 Features

- **Switch to Fast Mode**: `Ctrl+Alt+F` (Mac: `Cmd+Alt+F`)
- **Switch to Planning Mode**: `Ctrl+Alt+P` (Mac: `Cmd+Alt+P`)

## 📦 Installation

1. Clone or download this repository.
2. Run `npm install` in the terminal to install dependencies.
3. Press `F5` to run in debug mode, or package it into a `.vsix` file for installation.
   - Packaging command: `vsce package` (requires `npm install -g vsce` beforehand)

## ⚙️ Configuration

This extension attempts to toggle modes by changing the `antigravity.agentMode` setting by default.
If Antigravity's internal setting key is different, you may need to modify the code in `extension.ts` to apply the correct setting key.

## ⌨️ Custom Keybindings

If you don't like the default keybindings, you can change them in VS Code's **Keyboard Shortcuts** settings (`Cmd+K Cmd+S`).
Search for `antigravity-toggle` and assign your desired keys.

## 📝 License

MIT License
