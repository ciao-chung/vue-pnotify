<template>
  <div>
    <h1>Base</h1>

    <button @click="open">Simple Notify</button>

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