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
      <img class="detail-banner-img" :src="bannerImg" alt="">
      <div class="detail-back" v-show="!headerShow" @click="backClick">
        <van-icon name="arrow-left" size="40" />
      </div>
      <div class="banner-info">
        <div class="banner-info-title">
          {{ sightName }}
        </div>
        <div class="banner-info-num">
          <div class="banner-img"><van-icon name="photo-o" size="15" /></div>
          <div class="banner-num">
            {{ imgs.length }}
          </div>
        </div>
      </div>
    </div>
    <fade-animation>
      <gallery v-if="galleryShow" :imgs="imgs" @swiperClick="swiperClick" />
    </fade-animation>
    <div class="content-list">
      <detail-list :list="categoryList"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Gallery from '@/commom/gallery/Gallery.vue'
import FadeAnimation from '@/commom/fade/FadeAnimation.vue'
import DetailList from './List'
export default {
  name: 'Detail',
  data() {
    return {
      bannerImg: '',
      imgs: [],
      sightName: '',
      categoryList: [],
      galleryShow: false,
      headerShow: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  components: {
    Gallery,
    DetailList,
    FadeAnimation
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
    let city = this.$route.params.id
    axios.get(`/api/detail.json?city=${city}`).then((res) => {
      this.imgs = res.data.data.gallaryImgs
      this.bannerImg = res.data.data.bannerImg
      this.sightName = res.data.data.sightName
      this.categoryList = res.data.data.categoryList
    })
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
  .content-list
    width 100%
    height 800px
    padding-top 10px
</style>