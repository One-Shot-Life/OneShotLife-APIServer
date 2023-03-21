# OneShotLife-APIServer

인생은 한방 ! API 서버

## 세팅방법

1. eslint, prettier 플러그인이 설치가 안되어 있다면 설치해주세요

2. cmd + shift + p 열고

> 기본 설정: 설정 열기(JSON) \
> Preferences Open Settings (JSON)

눌러서 setting.json 파일을 열어주세요

아래 내용을 입력해주시고 중복되는것 있으면 제거해주세용

```json

"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
"source.fixAll": true,
"source.organizeImports": true
}
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"eslint.format.enable": true,
"eslint.packageManager": "yarn",
"eslint.probe": ["typescript"]

```

### 아래는 혹시나 eslint 가 폴더경로 못잡을때 아래 보고 참고해서 디렉터리 등록해줘야 해요

```json

"eslint.workingDirectories": [
{
"directory": "./dcReact/packages/desktop-business",
"changeProcessCWD": true
},
{ "directory": "./petbook_fe", "changeProcessCWD": true },
{ "directory": "./petBook-Client/petbook_fe", "changeProcessCWD": true },

{ "directory": "./packages/webhook_discord", "changeProcessCWD": true }

],

```
