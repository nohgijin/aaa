<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="MODULE_FEDERATION_TEST"/>
  </div>
</template>

<script>
// Module Federation을 사용하여 remote에서 컴포넌트 로드
// 동일 프로젝트 내에서는 일반적으로 직접 import를 사용하지만,
// 다른 프로젝트에서 이 컴포넌트를 사용할 수 있도록 remote로 노출됨
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
