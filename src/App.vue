<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
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
