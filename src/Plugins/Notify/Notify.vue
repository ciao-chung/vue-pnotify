<template></template>

<script>
import 'pnotify/dist/pnotify.js'
import 'pnotify/dist/pnotify.animate.js'
import 'pnotify/dist/pnotify.buttons.js'
import { events } from 'Plugins/Events.js'
export default {
  props: {
    options: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      animateConfig: {
        animate: true,
        in_class: 'flipInX',
        out_class: 'flipOutX',
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
        delay: options.delay || this.defaultDelay,
        animate: this.animateConfig,
      }
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