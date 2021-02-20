import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/common.styl'
import 'vant/lib/icon/local.css'

Vue.config.productionTip = false

import { Icon, Swipe, SwipeItem, Grid, GridItem, Image as VanImage, IndexBar, IndexAnchor, Cell, Sticky  } from 'vant'

Vue.use(Icon)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(VanImage)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
Vue.use(Sticky)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
