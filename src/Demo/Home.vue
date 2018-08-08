<template>
  <div class="row">

    <div class="block col-xs-12 col-sm-12 col-md-6 col-lg-6"
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
import StyleBlock from 'Demo/Blocks/Style/Style.vue'
import StickyBlock from 'Demo/Blocks/Sticky/Sticky.vue'
import AnimateBlock from 'Demo/Blocks/Animate/Animate.vue'
export default {
  data() {
    return {
      navHeight: 50,
      blocks: [
        { name: 'Base', id: 'base' },
        { name: 'Options', id: 'options' },
        { name: 'Style', id: 'style' },
        { name: 'Sticky', id: 'sticky' },
        { name: 'Animate', id: 'animate' },
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
    StyleBlock,
    StickyBlock,
    AnimateBlock,
  },
}
</script>

<style lang="sass" type="text/sass">
button
  margin-right: 10px
</style>