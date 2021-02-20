<template>
  <div id="app">
    <keep-alive exclude="Detail">
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
</style>
