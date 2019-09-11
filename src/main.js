import Vue from 'vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'

import routes from './router';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuetify/dist/vuetify.min.css'


const router = new VueRouter({mode: 'history', routes});

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueRouter)
Vue.use(vuetify)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
