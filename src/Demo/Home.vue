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
import BaseBlock from 'Demo/Blocks/Base/Base.vue'
import OptionsBlock from 'Demo/Blocks/Options/Options.vue'
import StickyBlock from 'Demo/Blocks/Sticky/Sticky.vue'
export default {
  data() {
    return {
      navHeight: 50,
      blocks: [
        { name: 'Base', id: 'base' },
        { name: 'Options', id: 'options' },
        { name: 'Sticky', id: 'sticky' },
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
  watch: {
    $route() {
      this.scrollToBlock()
    },
  },
  components: {
    BaseBlock,
    OptionsBlock,
    StickyBlock,
  },
}
</script>