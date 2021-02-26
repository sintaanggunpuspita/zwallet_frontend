import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueCurrencyInput from 'vue-currency-input'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.durective('setsinta', {
  bind: function (el, binding) {
    console.log(binding.modifiers.style)
    // if (binding.value === 'blue') {
    //   el.style.color = 'blue'
    // } else if (binding.value === 'red') {
    //   el.style.color = 'red'
    // } else {
    //   el.style.color = 'salmon'
    // }

    el.style.color = binding.value ? binding.value : 'black'

    // kondisi kedua
    if (binding.arg === 'big') {
      el.style.fontSize = '50px'
      el.style.fontSize = '8px'
    } else {
      el.style.fontSize = '12px'
    }
    // modifiers
    if (binding.modifiers.style) {
      el.style.fontStyle = 'italic'
      el.style.fontSize = '8px'
    }
  }
})
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueCurrencyInput, {
  globalOptions: {
    currency: {
      prefix: 'Rp'
    },
    precision: 0
  },
  componentName: 'MoneyInput' // now you can use the component with <money-input/>
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
