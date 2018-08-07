<template>
  <div>
    <h1>Base</h1>

    <button @click="open">Simple Notify</button>

    <div>
      <Snippet></Snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Base.md'
export default {
  methods: {
    open() {
      this.$notify('Simple Notify')
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>