<template>
  <div>
    test component
     <slot v-bind:msg="msg">
      </slot>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      loading: true,
      dis:'',
      visible: false,
      msg: 'this is a message'
    }
  },
  methods: {
    beforeCloseHander() {

    }
  },
  created() {
    debugger
    console.log(this.$style.red);
  }
}

</script>
<style module>
.red {
  color: red;
}
</style>