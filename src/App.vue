<template>
  <div id="app" class="container">
    <ComponentNav></ComponentNav>
    <router-view class="route-view"></router-view>
    <VuePNotify
      :options="options"></VuePNotify>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.js"
import Vue from 'vue'
import VuePNotify from 'Plugins/Notify/Installer.js'
import ComponentNav from 'Components/Nav'
Vue.use(VuePNotify)
export default {
  name: 'App',
  data() {
    return {
      options: {
        defaultStyle: 'success',
        animateConfig: {
          animate: true,
          in_class: 'flipInX',
          out_class: 'flipOutX',
        },
      }
    }
  },
  components: {
    ComponentNav,
  },
}
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style lang="sass" type="text/sass" scoped></style>