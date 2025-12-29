# Module Federation 사용 가이드

## 현재 프로젝트 설정

이 프로젝트는 `HelloWorld.vue` 컴포넌트를 Module Federation의 remote로 노출합니다.

### 빌드 및 실행

```bash
yarn serve
# 또는
npm run serve
```

빌드 후 `http://localhost:8080/remoteEntry.js`에서 remote entry 파일에 접근할 수 있습니다.

## 다른 프로젝트에서 사용하기

### 1. Host 프로젝트 설정 (vue.config.js)

```javascript
const { defineConfig } = require('@vue/cli-service')
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin

module.exports = defineConfig({
  configureWebpack: {
    plugins: [
      new ModuleFederationPlugin({
        name: 'host_app',
        remotes: {
          myProject: 'my_project@http://localhost:8080/remoteEntry.js'
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: '^2.6.14'
          }
        }
      })
    ]
  }
})
```

### 2. Host 프로젝트에서 컴포넌트 사용

```vue
<template>
  <div>
    <RemoteHelloWorld msg="Hello from Host App" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
    RemoteHelloWorld: () => import('myProject/HelloWorld')
  }
}
</script>
```

또는 동적으로 로드:

```javascript
export default {
  name: 'App',
  data() {
    return {
      HelloWorld: null
    }
  },
  async mounted() {
    const module = await import('myProject/HelloWorld')
    this.HelloWorld = module.default
  }
}
```

## 주의사항

1. **CORS 설정**: 개발 서버에서 CORS 헤더가 설정되어 있어야 합니다 (이미 설정됨)
2. **포트**: Remote 프로젝트가 실행 중이어야 합니다
3. **Vue 버전**: Host와 Remote가 동일한 Vue 버전을 공유해야 합니다
4. **빌드**: Production 빌드 시 remoteEntry.js 파일이 생성됩니다

