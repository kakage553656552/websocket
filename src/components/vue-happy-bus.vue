<template>
  <div>
    11122222
    <el-button @click="click">emit</el-button>
  </div>
</template>
 
 <script>
import Vue from 'vue'
import Bus from 'vue-happy-bus'
Vue.prototype.$Bus = Bus
export default {
  data() {
    return {
      loading: true,
      dis:'',
      Bus: this.$Bus(this)
    }
  },
  methods: {
    click() {
      this.Bus.$emit('bus','AAAAAAA')
    }
  },
  created() {
    this.Bus.$on('bus',(e)=>{
      console.log(e)
    })
  }
}

</script>
<style module>
.red {
  color: red;
}
</style>