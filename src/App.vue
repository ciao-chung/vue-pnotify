<template>
  <div id="app">
    <ComponentNav></ComponentNav>
    <router-view class="route-view"></router-view>
    <AwesomeNotify
      :options="options"></AwesomeNotify>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.js"
import Vue from 'vue'
import AwesomeNotify from 'Plugins/Notify/Installer.js'
import ComponentNav from 'Components/Nav'
Vue.use(AwesomeNotify)
export default {
  name: 'App',
  data() {
    return {
      options: {
        defaultStyle: 'success',
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
<style lang="sass" type="text/sass" scoped>
.route-view
  padding: 20px
</style>