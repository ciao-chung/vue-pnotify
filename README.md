# Vue PNotify

> A Vue PNotify Plugin

## Dependencies

* jquery
* pnotify
* animate.css
* bootstrap 3/4
* font-awesome(If you used icon option)

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

## Setup

Expose jQuery in webpack

```javascript
module.exports = {
  module: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery/dist/jquery",
        jQuery: "jquery/dist/jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
      })
    ],
  },
}
```

Install VuePNotify component in App.vue

```html
<template>
  <div id="app">
    <VuePNotify></VuePNotify>
  </div>
</template>

<script>
import Vue from 'vue'
import VuePNotify from 'vue-pnotify'
Vue.use(VuePNotify)
</script>

<!--Remember import style file in App.vue-->
<style src="bootstrap/dist/css/bootstrap.css"></style>
<style src="font-awesome/css/font-awesome.min.css"></style>
```

## Base usage

```javascript
// string
this.$notify('Simple Notify')

// complete config
this.$notify({
  title: 'Foo',
  text: 'bar',
})
```

## More options

* title(String): Title of notification.
* text(String): Text of notification, it is optional.
* style(String): Style, it has four style(info, success, warning, error), default is info.
* delay(Number): The delay time(ms) of notification, default is 8000ms.
* sticky(Boolean): Make notification will not be auto close, default is false.

## Setup default options

If you want to setup your default options(replace default options of above) or change some configuration.

You can do that by setting options property of **VuePNotify**.

There are some changeable default options.

* defaultStyle(String): default style, the default is info.
* defaultDelay(String): default delay, the default is 8000(ms).
* zIndex(Number): z-index of notification, default is 9000.
* animateConfig(Object): default animate configuration of pnotify, default is bounceIn/bounceOut.
  * See [PNotify Animate Module](https://github.com/sciactive/pnotify#animate-module).

```html
<template>
  <div id="app">
    <VuePNotify :options="options"></VuePNotify>
  </div>
</template>

<script>
import Vue from 'vue'
import VuePNotify from 'vue-pnotify'
Vue.use(VuePNotify)
export default {
  data() {
    return {
      options: {
        defaultStyle: 'success',
        defaultDelay: 3000,
        zIndex: 5000,
        animateConfig: {
          animate: true,
          in_class: 'flipInX',
          out_class: 'flipOutX',
        },
      }
    }
  },
}
</script>
```
