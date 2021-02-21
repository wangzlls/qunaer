<template>
  <div>
    <div class="item"  v-for="(item, index) of list" :key="index">
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position relative
    top 7px
    left 5px
    width 40px
    height 30px
    display: inline-block
    background url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22px no-repeat
    background-size 40px 200px
  .item-title
    line-height: 40px
    font-size: 16px
    padding: 0 8px
  .item-chilren
    padding: 0 20px
</style>
