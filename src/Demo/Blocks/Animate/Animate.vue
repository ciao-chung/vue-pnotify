<template>
  <div>
    <h1>Custom Animate</h1>

    <button @click="notify('bounce')">bounce</button>
    <button @click="notify('lightSpeed')">lightSpeed</button>
    <button @click="notify('rotate')">rotate</button>
    <button @click="notify('zoom')">zoom</button>
    <button @click="notify('roll')">roll</button>

    <div>
      More animate see
      <a href="https://daneden.github.io/animate.css/" target="_blank">
        animate.css
      </a>
      <Snippet></Snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Animate.md'
export default {
  methods: {
    notify(animate) {
      this.$notify({
        title: animate,
        delay: 1000,
        animate: {
          animate: true,
          in_class: `${animate}In`,
          out_class: `${animate}Out`,
        },
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>