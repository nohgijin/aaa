<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>하잇! 모듈분리하기! 테스트!</h1>
    <div class="hello-1">안녕? 스타일 잘 돼?</div>
    <div class="hello-2">안녕? 배경 잘 돼?</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello-1 {
    margin: 40px 0 0;
  }
  .hello-2 {
    background-color: red;
    border:1px solid black;
  }
</style>
