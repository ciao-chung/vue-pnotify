<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="https://github.com/ciao-chung/vue-pnotify" target="_blank">
          <i class="fa fa-github"></i>
          <span>Vue PNotify</span>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li v-for="block in blocks">
            <router-link class="dropdown-item"
              :key="block.name"
              :to="{ name: 'home', query: { block: block.name } }">
              {{block.label}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      blocks: [
        { label: 'Base', name: 'base' },
        { label: 'Options', name: 'options' },
        { label: 'Style', name: 'style' },
        { label: 'Sticky', name: 'sticky' },
        { label: 'Custom Animate', name: 'animate' },
      ]
    }
  },
}
</script>

<style lang="sass" type="text/sass" scoped>
.dropdown-toggle
  cursor: pointer
.dropdown-item
  cursor: pointer
</style>