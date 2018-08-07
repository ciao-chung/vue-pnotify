<template>
  <div>
    <h1>Notify</h1>

    <button @click="open">Simple Notify</button>
  </div>
</template>

<script>
  export default {
    methods: {
      open() {
        // this.$notify('Simple Notify')
        this.$notify({
          title: 'Style Notify',
          text: 'foo',
          style: 'warning',
          icon: 'fa fa-info'
        })
      },
    },
  }
</script>