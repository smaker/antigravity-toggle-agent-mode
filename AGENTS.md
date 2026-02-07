# Antigravity Mode Toggle - 에이전트 규칙 (AGENTS.md)

> AI 에이전트(Cursor, Claude 등)가 공통으로 따를 프로젝트 규칙입니다.

---

## 1. 프로젝트 개요

- **프로젝트명**: Antigravity Mode Toggle
- **설명**: Antigravity 확장의 에이전트 모드(Fast/Planning)를 단축키로 전환하는 VS Code 확장 프로그램
- **제작자**: Simplesoft (심플소프트)
- **핵심 스택**: TypeScript, VS Code Extension API, Node.js

---

## 2. TypeScript 및 타입 규칙

- **any 타입 사용 금지**: any 대신 반드시 명확하고 재사용 가능한 타입을 정의하여 사용한다.
- **VS Code API 활용**: `vscode` 네임스페이스의 타입을 적극 활용한다.
- **재사용 가능 타입**: 인터페이스, 타입 별칭 등을 활용하여 코드의 가독성을 높인다.

---

## 3. 명명 규칙

| 대상 | 규칙 | 예시 |
|------|------|------|
| 파일 | kebab-case | `extension.ts`, `command-handler.ts` |
| 클래스 | PascalCase | `ModeManager` |
| 함수/변수 | camelCase | `activate`, `switchToFast` |
| 명령어 ID | dot.notation | `antigravity-toggle.switchToFast` |

---

## 4. Import 경로 규칙

- **경로 별칭 사용**: `src/` 디렉토리를 가리키는 `@/` 별칭을 사용하여 경로의 명확성을 높인다.
- **상대 경로**: 같은 디렉토리 내의 파일은 상대 경로를 사용할 수 있다.
- **VS Code 모듈**: `import * as vscode from 'vscode';` 형식을 준수한다.

---

## 5. 프로젝트 구조

```
.
├── src/
│   └── extension.ts    # 확장 프로그램 진입점 및 메인 로직
├── package.json        # 확장 설정 (manifest), 의존성, 스크립트
├── pnpm-lock.yaml      # pnpm 잠금 파일
├── tsconfig.json       # TypeScript 설정
└── README.md           # 프로젝트 설명서
```

---

## 6. 패키지 관리자

- **기본 패키지 매니저**: `pnpm`을 사용한다.
- **Lock 파일**: `pnpm-lock.yaml`을 버전 관리한다.
- **Linter & Foramtter**: `Biome`을 사용한다. `ESLint`와 `Prettier`는 사용하지 않는다.

---

## 7. VS Code 확장 개발 패턴

- **Command 등록**: `package.json`의 `contributes.commands`와 `extension.ts`의 `vscode.commands.registerCommand`를 일치시킨다.
- **Configuration**: 설정 변경 시 `vscode.workspace.getConfiguration`을 사용하고, `Global` 타겟으로 업데이트한다.
- **에러 처리**: `try-catch` 블록을 통해 예외를 포착하고, `vscode.window.showErrorMessage` 등으로 사용자에게 알린다.
- **메시지 피드백**: 모드 전환 성공 시 `vscode.window.setStatusBarMessage`를 사용하여 가볍게 피드백을 준다.

---

## 8. Git 및 커밋 규칙

- **커밋 메시지**: `<type>: <subject>` 형식, 한글, 50자 이내, 명령문 현재시제, 마침표 없음.
  - **type**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore` 등
  - **예**: `feat: 단축키 설정 추가`, `fix: 설정 업데이트 오류 수정`

---

## 9. 금지 사항

- **console.log 남발**: 디버깅 용도로만 제한적으로 사용하고, 프로덕션 코드에서는 최소화한다.
- **하드코딩**: 명령어 ID나 설정 키 값 등을 가능한 상수로 관리한다.
- **any 타입 사용 금지**: 어떠한 경우에도 any 타입을 사용하지 않는다. 필요한 경우 unknown을 사용한다.

---

이 규칙을 준수하여 일관되고 유지보수 가능한 확장을 개발하세요.
