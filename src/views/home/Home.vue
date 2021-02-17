<template>
  <div>
    <div class="header">
      <div class="header-left">
        <van-icon name="arrow-left" size="30" color="#fff" />
      </div>
      <div class="header-center">
        <div class="header-seach">
          <div class="seach-icon">
            <van-icon name="search" size="20" />
          </div>
          <div class="seach-content">
            输入城市/景点/游玩主题
          </div>
        </div>
      </div>
      <div class="header-right">
        <div class="header-place">
          北京
        </div>
        <div class="place-icon">
          <van-icon name="arrow-down" size="10" />
        </div>
      </div>
    </div>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in swiperList" :key="item.id">
          <img :src="item.imgUrl" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="gird">
      <van-grid :gutter="0" :border="false" :clickable="true">
        <van-grid-item v-for="item in iconList" :key="item.id">
          <van-image width="50" height="50" :src="item.imgUrl" />
          <span>{{ item.desc }}</span>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="recommend">
      <div class="title">
        热销推荐
      </div>
      <div class="recommend-item" v-for="item in recommendList" :key="item.id" >
        <div class="recommend-item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="recommend-item-dec">
          <p class="recommend-item-title">
            {{ item.title }}
          </p> 
          <p class="recommend-item-desc">
            {{ item.desc }}
          </p>
          <button class="detail">查看详情</button>
        </div>
      </div>
    </div>
    <div class="weekend">
      <div class="title">
        周末去哪儿
      </div>
      <div class="recommend-item" v-for="item in weekendList" :key="item.id" >
        <div class="weekend-item-img">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="weekend-item-dec">
          <p class="weekend-item-title">
            {{ item.title }}
          </p> 
          <p class="weekend-item-desc">
            {{ item.desc }}
          </p>
          <button class="detail">查看详情</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getHomeInfo } from '@/service/home'
import axios from 'axios'
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  created() {
    this.getHome()
  },
  methods: {
    getHome() {
      axios.get(`/api/index.json`).then((res) => {
        console.log(res.data.data)
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.recommendList = res.data.data.recommendList
        this.weekendList = res.data.data.weekendList
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .header
    width 100%
    height 40px
    display flex
    background-color #00bcd4
    .header-left
      width 40px
      height 40px
      padding 5px
    .header-center
      height 30px
      flex 1
      background-color #fff
      color #ccc
      margin-top 5px
      margin-bottom 5px
      padding-left 8px
      line-height 30px
      border-radius 5px
      .header-seach
        display flex
        .seach-icon
          width 25px
          height 30px
          padding 3px
    .header-right
      height 40px
      display flex
      padding 10px
      color #fff
  .gird >>> .van-grid-item__content
    padding 5px 8px
    span
      margin-top 5px
      font-size 15px
      font-weight bold
      color #333
  .title
    width 100%
    height 40px
    line-height 40px
    text-indent 10px
    margin-top 10px
    background-color #eee
    font-weight 600
  .recommend
    width 100%
    .recommend-item
      padding 2px 10px 1px 10px
      border-bottom 1px solid #eee
      display flex
      .recommend-item-img
        width 90px
        height 90px
        flex-shrink 0
      .recommend-item-dec
        padding-left 10px
        min-width: 0
        .recommend-item-title
          height 30px
          font-size 18px
          font-weight 600
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .recommend-item-desc
          height 30px
          line-height 20px
          color: #ccc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .detail
          width 100px
          height 25px
          font-size 15px
          background-color #ff9300
          border none
          border-radius 10px
          color #fff
  .weekend
    width 100%
    .recommend-item
      padding 5px 0 2px
      .weekend-item-img
        overflow hidden
        img
          width 100%
      .weekend-item-dec
        padding 0 10px
        .weekend-item-title
          height 30px
          font-size 18px
          font-weight 600
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .weekend-item-desc
          height 30px
          line-height 20px
          color: #ccc
          overflow: hidden
          white-space: nowrap
          text-overflow: ellipsis
        .detail
          width 100px
          height 25px
          font-size 15px
          background-color #ff9300
          border none
          border-radius 10px
          color #fff
</style>