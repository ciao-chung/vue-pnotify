import AwesomeNotify from './Notify.vue'
import Vue from 'vue'
import { events } from 'Plugins/Events.js'

class Installer {
  constructor() {
    this.isInstalled = false
  }
  install(Vue, options) {
    if(this.isInstalled) return

    this.isInstalled = true
    Vue.component('AwesomeNotify', AwesomeNotify)

    Vue.prototype.$notify = (options) => {
      events.$emit('notify', options)
    }
  }
}

export default new Installer()