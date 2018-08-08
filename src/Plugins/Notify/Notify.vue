<template></template>

<script>
import PNotify from 'pnotify/dist/pnotify.js'
import 'pnotify/dist/pnotify.animate.js'
import 'pnotify/dist/pnotify.buttons.js'
import { events } from 'Plugins/Events.js'
window.PNotify = PNotify
export default {
  props: {
    options: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      defaultAnimateConfig: {
        animate: true,
        in_class: 'bounceIn',
        out_class: 'bounceOut',
      },
    }
  },
  created() {
    PNotify.prototype.options.styling = 'fontawesome'
    events.$on('notify', this.notify)
  },
  methods: {
    createConfig(options) {
      let result = {}
      if(!(options instanceof Object)) {
        result = {
          title: options || '',
          type: this.defaultStyle,
          delay: this.defaultDelay,
          animate: this.animateConfig,
        }
        return result
      }

      result = {
        title: options.title || '',
        text: options.text || '',
        type: options.style || 'success',
        icon: options.icon || null,
        hide: options.sticky == true ? false : true,
        animate: this.animateConfig,
      }

      if(result.hide) result.delay = options.delay || this.defaultDelay

      return result
    },
    notify(options) {
      let notify = new PNotify(this.createConfig(options))

      this.$nextTick(() => $('body>div.ui-pnotify').css({ 'z-index': this.zIndex }) )

      notify.get().click(function () {
        notify.remove()
      })
    },
  },
  computed: {
    defaultStyle() {
      if(!this.options) return 'info'
      if(!this.options.defaultStyle) return 'info'
      return this.options.defaultStyle
    },
    zIndex() {
      if(!this.options) return 9000
      if(!this.options.zIndex) return 9000
      return this.options.zIndex
    },
    defaultDelay() {
      if(!this.options) return 8000
      if(!this.options.defaultDelay) return 8000
      return this.options.defaultDelay
    },
    animateConfig() {
      if(!this.options) return this.defaultAnimateConfig
      if(!this.options.animateConfig) return this.defaultAnimateConfig
      return this.options.animateConfig
    },
  },
}
</script>

<style src="pnotify/dist/pnotify.history.css"></style>
<style src="pnotify/dist/pnotify.css"></style>
<style src="pnotify/dist/pnotify.buttons.css"></style>
<style src="animate.css/animate.css"></style>
<style lang="sass" type="text/sass">
h4.ui-pnotify-title
  text-transform:  capitalize
</style>