<template>
  <div>
    <h1>Options</h1>

    <button @click="open">Notify</button>

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