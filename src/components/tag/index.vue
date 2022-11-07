<template>
  <span v-if="show" :class="['ka_tag',`ka_tag--${type}`,`ka_tag--${size}`]" :style="{backgroundColor:color,cursor: $listeners.click?'pointer':''}" @click="click">
    <slot></slot>
    <i v-if="closable" :class="['ka_close','el-icon-close']" @click.stop="clickHandler"></i>
  </span>
</template>
<script>
export default {
  name: 'kaTag',
  props: {
    type: {
      type: String
    },
    closable: {
      type: Boolean
    },
    color: {
      type: String
    },
    size: {
      type: String
    }
  },
  data() {
    return {
      show: true,
      Bus:this.$Bus(this)
    }
  },
  methods: {
    clickHandler() {
      this.show = false
      this.$emit('close')
    },
    click() {
      console.log(this)
      this.$emit('click')
      this.Bus.$emit('event:bus','AAAAASDGLAKJSDG;LASDJGGGGGGGGGGGGGGGGGG')
    }
  }
}
</script>
<style scoped src="./index.css"></style>