import VuePNotify from './Notify.vue'
import Vue from 'vue'
import { events } from 'Plugins/Events.js'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return

    this.isInstalled = true
    Vue.component('VuePNotify', VuePNotify)

    Vue.prototype.$notify = (options) => {
      events.$emit('notify', options)
    }
  }
}

export default new Installer()