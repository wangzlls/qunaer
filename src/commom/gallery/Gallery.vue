<template>
  <div>
    <div class="container" @click="swiperClick">
      <van-swipe class="my-swipe" @change="onChange" ref="swipe">
        <van-swipe-item v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item" alt="">
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{ current + 1 }}/{{ imgsLength }}</div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      current: 0
    }
  },
  computed: {
    imgsLength() {
      return this.imgs.length
    }
  },
  methods: {
    onChange(index) {
      this.current = index
    },
    swiperClick() {
      this.$emit('swiperClick')
    }
  },
  activated() {
    this.$refs.swipe.resize()
  }
}
</script>

<style lang="stylus" scoped>
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 0
    bottom 0
    left 0
    right 0
    background-color #000
    z-index 2
    .van-swipe
      overflow visible
    .my-swipe
      height 0
      width 100%
      padding-bottom 100%
      .gallery-img
        width 100%
      .custom-indicator
        position absolute
        bottom -30px
        font-size 20px
        color #fff
        left 48%
</style>