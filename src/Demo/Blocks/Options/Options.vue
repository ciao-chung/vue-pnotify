<template>
  <div>
    <h1>Options</h1>

    <button @click="open">Notify</button>

    <div>
      <Snippet></Snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Options.md'
export default {
  methods: {
    open() {
      this.$notify({
        title: 'Foo',
        text: 'bar...',
        icon: 'fa fa-info',
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>