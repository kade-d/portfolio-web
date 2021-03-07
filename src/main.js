import Vue from 'vue'
import VueRouter from 'vue-router'
import Shell from "./components/Shell";
import vuetify from './plugins/vuetify';
import "./assets/global-style.css"


Vue.use(VueRouter)

const routes = [

  { path: '/home', component: Shell },
  { path: '/about', component: Shell },
  { path: '/portfolio', component: Shell },
  { path: '/resume', component: Shell },
  { path: '*', redirect: '/home' }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(Shell),
  vuetify,
  router: router
}).$mount('#app')
