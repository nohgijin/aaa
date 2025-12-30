# remoteEntry.js 로드 오류 해결 가이드

## 오류 메시지
```
ScriptExternalLoadError: Loading script failed.
(missing: http://localhost:8080/remoteEntry.js)
```

## 해결 단계

### 1. my-project 앱 실행 확인

`my-project` 디렉토리에서 개발 서버를 실행하세요:

```bash
cd /Users/gijinnoh/Desktop/gabia/my-project
npm run serve
# 또는
yarn serve
```

서버가 정상적으로 실행되면 다음과 같은 메시지가 표시됩니다:
```
App running at:
- Local:   http://localhost:8080/
```

### 2. remoteEntry.js 접근 확인

브라우저에서 직접 접근해보세요:
```
http://localhost:8080/remoteEntry.js
```

**정상적인 경우**: JavaScript 파일이 로드됩니다.
**오류가 있는 경우**: 
- 404 Not Found: 서버가 실행되지 않았거나 빌드가 안 됨
- Connection refused: 서버가 실행되지 않음
- CORS 오류: CORS 설정 문제

### 3. 브라우저 콘솔 확인

`hr-work` 앱의 브라우저 콘솔에서:
1. Network 탭 열기
2. `remoteEntry.js` 요청 찾기
3. 상태 코드 확인:
   - **200**: 정상
   - **404**: 파일을 찾을 수 없음
   - **CORS 오류**: CORS 설정 문제
   - **ERR_CONNECTION_REFUSED**: 서버가 실행되지 않음

### 4. Mixed Content 문제 (HTTPS → HTTP)

`hr-work` 앱이 `https://hr-work.local.hiworks.com:8081`에서 실행 중이고, `my-project`가 `http://localhost:8080`에서 실행 중인 경우 Mixed Content 오류가 발생할 수 있습니다.

**해결 방법 1**: 브라우저에서 Mixed Content 허용
- Chrome: 주소창의 자물쇠 아이콘 클릭 → "사이트 설정" → "안전하지 않은 콘텐츠" 허용

**해결 방법 2**: `my-project`도 HTTPS로 실행 (복잡함)

**해결 방법 3**: `hr-work`에서 HTTP로 접근하도록 설정 (권장하지 않음)

### 5. 포트 확인

`my-project`가 다른 포트에서 실행 중일 수 있습니다. 다음을 확인하세요:

```bash
# 포트 8080이 사용 중인지 확인
lsof -i :8080
```

다른 포트에서 실행 중이라면 `vue.config.js`의 `remotes` 설정을 수정하세요.

### 6. 재시작

두 앱 모두 재시작하세요:

1. `my-project` 서버 중지 (Ctrl+C)
2. `my-project` 서버 재시작 (`npm run serve`)
3. `hr-work` 서버 중지 (Ctrl+C)
4. `hr-work` 서버 재시작
5. 브라우저 하드 리프레시 (Cmd+Shift+R)

## 체크리스트

- [ ] `my-project` 서버가 실행 중인가?
- [ ] `http://localhost:8080`에 접근 가능한가?
- [ ] `http://localhost:8080/remoteEntry.js`에 접근 가능한가?
- [ ] 브라우저 콘솔에 CORS 오류가 있는가?
- [ ] 브라우저 콘솔에 Mixed Content 오류가 있는가?
- [ ] 두 앱 모두 재시작했는가?

