<template>
  <div id="app">
    <router-view><test-vant/></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    console.log(this.$route)
  }
}
</script>

<style lang="stylus">
  #app
    overflow-y scroll
</style>
