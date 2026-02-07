# Antigravity Mode Toggle Extension (안티그래비티 모드 전환 확장)

이 확장은 **Antigravity AI Agent**의 **Fast** 모드와 **Planning** 모드를 키보드 단축키로 빠르게 전환할 수 있도록 도와줍니다.

## 🚀 기능 (Features)

- **Fast 모드로 전환**: `Ctrl+Alt+F` (Mac: `Cmd+Alt+F`)
- **Planning 모드로 전환**: `Ctrl+Alt+P` (Mac: `Cmd+Alt+P`)

## 📦 설치 방법 (Installation)

1. 이 저장소를 클론하거나 다운로드합니다.
2. 터미널에서 `npm install`을 실행하여 의존성을 설치합니다.
3. `F5` 키를 눌러 디버깅 모드로 실행하거나, `.vsix` 파일로 패키징하여 설치할 수 있습니다.
   - 패키징 명령어: `vsce package` (사전에 `npm install -g vsce` 필요)

## ⚙️ 설정 (Configuration)

이 확장은 기본적으로 `antigravity.agentMode` 설정을 변경하여 모드를 전환하려고 시도합니다.
만약 Antigravity의 내부 설정 키가 다르다면, `extension.ts`의 코드를 수정하여 올바른 설정 키를 적용해야 할 수 있습니다.

## ⌨️ 단축키 변경 (Custom Keybindings)

기본 단축키가 마음에 들지 않으면 VS Code의 **Keyboard Shortcuts** 설정(`Cmd+K Cmd+S`)에서 변경할 수 있습니다.
검색창에 `antigravity-toggle`을 입력하고 원하는 키를 지정하세요.

## 📝 라이선스

MIT License
