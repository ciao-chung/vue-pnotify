<template>
  <div>
    <h1>Sticky</h1>

    <button @click="open">Sticky</button>

    <div class="row">
      <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="markdown-container">
          <Snippet></Snippet>
        </div>
      </div>
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