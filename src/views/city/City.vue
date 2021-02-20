<template>
  <div>
    <van-sticky :offset-top="0">
      <div class="header">
        <div class="header-left" @click="backClick">
          <van-icon name="arrow-left" size="30" color="#fff" />
        </div>
        <div class="header-center">
          城市选择
        </div>
        <div class="seach">
          <input class="seach-inp" v-model="keyWord" type="text" name="" placeholder="输入城市名或拼音" />
        </div>
      </div>
    </van-sticky>
    <div class="seach-result" v-show="keyWord.length">
      <div class="seach-result-item" v-for="item of iptList" :key="item.id" @click="handleCityChange(item.name)">
        {{ item.name }}
      </div>
      <div class="no-cities" v-show="hasNoData">未找到任何城市</div>
    </div>
    <div v-show="!keyWord.length">
      <van-sticky :offset-top="80">
        <div class="localCity">
          <div class="localCity-title">当前城市</div>
          <div class="localCity-item">
            {{ this.city }}
          </div>
        </div>
      </van-sticky>
      <div class="hotCity">
        <div class="hotCity-title">热门城市</div>
        <div class="hotCity-warper">
          <div class="hotCity-item" v-for="item of hotCities" :key="item.id" @click="handleCityChange(item.name)">
            {{ item.name }}
          </div>
        </div>
      </div>
      <van-index-bar :sticky-offset-top="165" @select="selectClick">
        <div v-for="(item, key) of cities" :key="key">
          <van-index-anchor :index="key" />
          <div v-for="innerItem of item" :key="innerItem.id" @click="handleCityChange(innerItem.name)">
            <van-cell :title="innerItem.name" />
          </div>
        </div>
      </van-index-bar>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'City',
  data() {
    return {
      hotCities: [],
      cities: {}, //城市数据
      keyWord: '',
      timer: null,
      iptList: [] //搜索城市数据
    }
  },
  computed: {
    ...mapState(['city']),
    hasNoData() {
      return this.iptList.length == 0 ? true : false
    }
  },
  mounted() {
    axios.get('/api/city.json').then((res) => {
      this.cities = res.data.data.cities
      this.hotCities = res.data.data.hotCities
    })
  },
  watch: {
    keyWord() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.iptList = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.iptList = result
      }, 100)
    }
  },
  methods: {
    backClick() {
      this.$router.back()
    },
    selectClick(e) {
      console.log(e)
    },
    handleCityChange(city) {
      this.keyWord = ''
      this.$store.commit('changeCity', city)
      this.$router.push('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
bb = 1px solid #eee
bb2 = 1px solid #ccc
  .header
    width 100%
    height 80px
    background-color #00bcd4
    position relative
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
    .seach
      width 100%
      height 40px
      padding 5px 8px 5px 8px
      background-color #00bcd4
      .seach-inp
        box-sizing border-box
        padding 0 5px
        width 100%
        line-height 30px
        border-radius 5px
        text-align center
        color #666
  .seach-result
    width 100%
    position absolute
    top 80px
    left 0
    right 0
    bottom 0
    overflow-y scroll
    background-color #eee
    z-index 3
    .seach-result-item
      padding-left 10px
      height 30px
      line-height 30px
      color #666
      background-color #fff
  .no-cities
    padding 5px
    color #666
  .localCity
    width 100%
    height 85px
    background-color #fff
    border-bottom 2px solid #eee
    .localCity-title
      width 100%
      height 35px
      padding-left 10px
      line-height 35px
      background-color #eee
    .localCity-item
      width 100px
      height 30px
      line-height 30px
      margin-top 10px
      margin-left 10px
      margin-bottom 10px
      text-align center
      border bb2
      border-radius 5px
  .hotCity
    width 100%
    display flex
    flex-direction column
    .hotCity-title
      width 100%
      height 35px
      padding-left 10px
      line-height 35px
      background-color #eee
    .hotCity-warper
      display flex
      flex-wrap wrap
      justify-content center
      border-bottom bb
      .hotCity-item
        width 100px
        height 30px
        line-height 30px
        margin 10px
        text-align center
        border bb2
        border-radius 5px
  .van-index-bar >>> .van-index-anchor
    border-bottom bb
  .van-cell
    .van-cell__title
      border-bottom bb

</style>