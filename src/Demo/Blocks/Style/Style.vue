<template>
  <div>
    <h1>Style</h1>

    <button @click="open(style)" v-for="style in styles">
      {{style}}
    </button>

    <div>
      <Snippet></Snippet>
    </div>
  </div>
</template>

<script>
import Snippet from './Style.md'
export default {
  data() {
    return {
      styles: ['info', 'success', 'warning', 'error']
    }
  },
  methods: {
    open(style) {
      this.$notify({
        title: 'Style Notify',
        text: style,
        style: style,
      })
    },
  },
  components: {
    Snippet,
  },
}
</script>

<style lang="sass" type="text/sass" scoped></style>