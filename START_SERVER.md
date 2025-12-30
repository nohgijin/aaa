# my-project 서버 실행 가이드

## 서버 실행 방법

### 1. 터미널에서 my-project 디렉토리로 이동

```bash
cd /Users/gijinnoh/Desktop/gabia/my-project
```

### 2. 의존성 설치 (처음 한 번만)

```bash
npm install
# 또는
yarn install
```

### 3. 개발 서버 실행

```bash
npm run serve
# 또는
yarn serve
```

### 4. 서버가 정상적으로 실행되면 다음과 같은 메시지가 표시됩니다:

```
App running at:
- Local:   http://localhost:8080/
- Network: http://192.168.x.x:8080/
```

### 5. remoteEntry.js 확인

브라우저에서 다음 URL로 접근해보세요:
```
http://localhost:8080/remoteEntry.js
```

**정상적인 경우**: JavaScript 코드가 표시됩니다.
**오류가 있는 경우**: 404 오류가 표시됩니다.

## 문제 해결

### 서버가 시작되지 않는 경우

1. **포트 8080이 이미 사용 중인 경우**:
   ```bash
   # 포트를 사용하는 프로세스 확인
   lsof -i :8080
   
   # 프로세스 종료
   kill -9 [PID]
   ```

2. **의존성이 설치되지 않은 경우**:
   ```bash
   npm install
   ```

3. **빌드 오류가 있는 경우**:
   - 콘솔의 오류 메시지 확인
   - `node_modules` 삭제 후 재설치:
     ```bash
     rm -rf node_modules
     npm install
     ```

### remoteEntry.js가 생성되지 않는 경우

1. **Module Federation 설정 확인**:
   - `vue.config.js`에서 `ModuleFederationPlugin`이 제대로 설정되어 있는지 확인
   - `filename: 'remoteEntry.js'`가 설정되어 있는지 확인

2. **서버 재시작**:
   - 서버를 중지하고 다시 시작

3. **빌드 확인**:
   ```bash
   npm run build
   ```
   빌드 후 `dist/remoteEntry.js` 파일이 생성되는지 확인

## 중요 사항

- **서버를 계속 실행 상태로 유지해야 합니다**
- `hr-work` 앱이 `my-project`의 `remoteEntry.js`를 로드하려면 `my-project` 서버가 실행 중이어야 합니다
- 서버를 종료하면 `hr-work` 앱에서 오류가 발생합니다

