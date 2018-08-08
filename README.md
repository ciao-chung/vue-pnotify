# Vue PNotify

> A Vue PNotify Plugin

## Dependencies

* jquery
* pnotify
* animate.css
* bootstrap 3/4

## Required

* Vue.js 2.x
 
## Installation

npm 

```bash
npm install vue-pnotify --save
```

yarn

```bash
yarn add vue-pnotify
```

## Base Usage

Install VuePNotify component in App.vue

```html
<template>
  <div id="app">
    <VuePNotify></VuePNotify>
  </div>
</template>

<script>
import Vue from 'vue'
import VuePNotify from 'Plugins/Notify/Installer.js'
Vue.use(VuePNotify)
</script>

<!--Remember import style file in App.vue-->
<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
<style src="prismjs/themes/prism.css"></style>
<style lang="sass" type="text/sass" scoped></style>
```

