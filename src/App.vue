<template>
  <div id="app">
    <router-view/>
    <AwesomeNotify
      :options="options"/>
  </div>
</template>

<script>
import "bootstrap/dist/js/bootstrap.js"
import Vue from 'vue'
import AwesomeNotify from 'Plugins/Notify/Installer.js'
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
}
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style lang="sass" type="text/sass" scoped></style>