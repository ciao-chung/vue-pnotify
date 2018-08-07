<template>
  <div>
    <h1>Sticky</h1>

    <button @click="open">Sticky</button>

    <div>
      <Snippet></Snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Sticky.md'
export default {
  methods: {
    open() {
      this.$notify({
        title: 'Sticky Notify',
        text: 'This is sticky notify',
        sticky: true,
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>