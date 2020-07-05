import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Cv from "./components/Cv";
import Portfolio from "./components/Portfolio";
import NotFound from "./components/NotFound";

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({

  routes: [
    {
      path: '/',
      component: Cv
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '*',
      component: NotFound
    }
  ],
  mode: 'history'
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
