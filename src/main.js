import Vue from 'vue'
import VueRouter from 'vue-router'
import Shell from "./components/Shell";
import {MdButton, MdAvatar, MdCard, MdContent} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'


Vue.use(VueRouter)

Vue.use(MdButton)
Vue.use(MdAvatar)
Vue.use(MdCard)
Vue.use(MdContent)

const routes = [

  { path: '/home', component: Shell },
  { path: '/about', component: Shell },
  { path: '/portfolio', component: Shell },
  { path: '*', redirect: '/home'}
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(Shell),
  router: router
}).$mount('#app')
