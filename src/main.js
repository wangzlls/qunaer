import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/common.styl'
import 'vant/lib/icon/local.css'

Vue.config.productionTip = false

import { Icon, Swipe, SwipeItem, Grid, GridItem, Image as VanImage } from 'vant'

Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
