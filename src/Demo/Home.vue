<template>
  <div>

    <div class="block"
      v-for="block in blocks"
      :key="'block'+block.name"
      :block="block.id">
      <component
        :is="block.name+'Block'"></component>
    </div>
  </div>
</template>

<script>
import jump from 'jump.js'
import Prismjs from 'prismjs'
// import PrismjsLoadLanguages from 'prismjs/components/index.js'
import BaseBlock from 'Demo/Blocks/Base/Base.vue'
export default {
  data() {
    return {
      navHeight: 56,
      blocks: [
        { name: 'Base', id: 'base' }
      ]
    }
  },
  mounted() {
    this.highlightSnippet()
    this.scrollToBlock()
  },
  updated() {
    this.highlightSnippet()
  },
  methods: {
    highlightSnippet() {
      this.$nextTick(() => {
        // PrismjsLoadLanguages(['javascript', 'php', 'sass', 'scss', 'bash'])
        Prismjs.highlightAll()
      })
    },
    scrollToBlock() {
      const block = this.$route.query.block
      if(!block) return
      const $block = $(`.block[block="${block}"]`)
      jump('div#app', {
        duration: 1000,
        offset: $block.offset().top - this.navHeight,
        a11y: false,
      })
    },
  },
  components: {
    BaseBlock,
  },
}
</script>