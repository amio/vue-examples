import Vue from 'vue'
import App from './App'

import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui'

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
