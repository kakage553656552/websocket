<template>
  <div>
    <el-button @click="visible=!visible">open</el-button>
    <testComponentVue v-slot="scope">
      <Dialog :visible.sync="visible" title="title" :show-close="true" width="800px" top="200px" :before-close="beforeCloseHander" >
        <div slot="title">
          <div style="color:red">this is a title</div>
        </div>
        {{scope.msg}}
      </Dialog>
    </testComponentVue>
  </div>
</template>
 
 <script>
import testComponentVue from "./test-component.vue";
export default {
  components: {
    testComponentVue
  },
  data() {
    return {
      loading: true,
      dis:'',
      visible: false
    }
  },
  methods: {
    beforeCloseHander() {

    }
  },
  created() {
    console.log(this.$style.red);
  }
}

</script>
<style module>
.red {
  color: red;
}
</style>