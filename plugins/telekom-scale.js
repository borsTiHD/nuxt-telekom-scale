import Vue from 'vue'
import { applyPolyfills, defineCustomElements } from '@telekom/scale-components/loader'
import '@telekom/scale-components/dist/scale-components/scale-components.css'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/scale-\w*/]

applyPolyfills().then(() => {
  defineCustomElements(window)
})
