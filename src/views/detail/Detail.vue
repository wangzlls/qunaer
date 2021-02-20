<template>
  <div class="detail">
    <div class="header" v-show="headerShow" :style="opacityStyle">
      <div class="header-left" @click="backClick">
        <van-icon name="arrow-left" size="30" color="#fff" />
      </div>
      <div class="header-center">
        景点详情
      </div>
    </div>
    <div class="detail-banner" @click="bannerClick">
      <img class="detail-banner-img" src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" alt="">
      <div class="detail-back" v-show="!headerShow" @click="backClick">
        <van-icon name="arrow-left" size="40" />
      </div>
      <div class="banner-info">
        <div class="banner-info-title">
          大连圣亚海洋世界(AAAA景区)
        </div>
        <div class="banner-info-num">
          <div class="banner-img"><van-icon name="photo-o" size="15" /></div>
          <div class="banner-num">39</div>
        </div>
      </div>
    </div>
    <gallery v-if="galleryShow" :imgs="imgs" @swiperClick="swiperClick" />
    <div class="fake-box"></div>
  </div>
</template>

<script>
import Gallery from '@/commom/gallery/Gallery.vue'
export default {
  name: 'Detail',
  data() {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg', 
      'http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png'],
      galleryShow: false,
      headerShow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  components: {
    Gallery
  },
  methods: {
    swiperClick() {
      this.galleryShow = false
    },
    bannerClick() {
      this.galleryShow = true
    },
    backClick() {
      this.$router.back()
    },
    handleScroll() {
      const top = document.documentElement.scrollTop
      if (top > 43) {
        let opacity = top / 190
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.headerShow = true
      } else {
        this.headerShow = false
      }
    }
  },
  created() {
    document.documentElement.scrollTop = 0
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
    this.galleryShow = false
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 40px
    background-color #00bcd4
    position fixed
    top 0
    right 0
    left 0
    z-index 2
    .header-left
      width 40px
      height 40px
      padding 5px
      position absolute
      top 0
      left 0
    .header-center
      width 100%
      height 40px
      line-height 40px
      text-align center
      color #fff
      font-size 20px
  .detail-banner
    position relative
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .detail-banner-img
      width 100%
    .detail-back
      width 40px
      height 40px
      line-height 40px
      text-align center
      background-color rgba(0, 0, 0, .6)
      position absolute
      top 5px
      left 5px
      padding-right 43px
      border-radius 50px
      color #eee
    .banner-info
      width 100%
      height 30px
      display flex
      justify-content space-between
      position absolute
      bottom 0px
      right 0
      left 0
      color #fff
      font-size 17px
      background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-info-title
        height 25px
        line-height 25px
        flex 1
        padding-left 5px
      .banner-info-num
        height 25px
        line-height 25px
        padding-right 10px
        padding-left 15px
        border-top-left-radius 10px
        border-bottom-left-radius 10px
        background-color rgba(0, 0, 0, .6)
        display flex
        justify-content space-between
        .banner-img
          height 25px
          line-height 28px
          padding-right 5px
  .fake-box
    width 100%
    height 800px
</style>