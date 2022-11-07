<template>
  <div>
    <!-- <el-button @click="visible=!visible">open</el-button>
    <testComponentVue v-slot="scope">
      <Dialog :visible.sync="visible" title="title" :show-close="true" width="800px" top="200px" :before-close="beforeCloseHander" >
        <div slot="title">
          <div style="color:red">this is a title</div>
        </div>
        {{scope.msg}}
      </Dialog>
    </testComponentVue> -->
    <ka-tag type="" closable @close="close" @click="click">AAA</ka-tag>
    <!-- <ka-tag type="success" closable @close="close">AAA</ka-tag>
    <ka-tag type="info" closable @close="close">AAA</ka-tag>
    <ka-tag type="danger" closable @close="close">AAA</ka-tag>
    <ka-tag type="warning" closable @close="close">AAA</ka-tag>
    <el-tag effect="light" closable>AAAA</el-tag> -->
    <!-- <el-tag effect="dark" closable>AAAA</el-tag>
    <el-tag effect="plain" closable>AAAA</el-tag> -->
  </div>
</template>
 
 <script>
import testComponentVue from "@/components/test-component.vue";
export default {
  components: {
    testComponentVue
},
  data() {
    return {
      loading: true,
      dis:'',
      visible: false,
      arr:[
        'aaa','bbb','ccc'
      ],
      Bus: this.$Bus(this)
    }
  },
  methods: {
    close() {
      console.log('close');
    },
    click() {
      console.log('click');
    }
  },
  created() {
    // console.log(this.$style.red);
    this.Bus.$on('event:bus',e=>console.log(e))
  }
}

</script>
<style module>
.red {
  color: red;
}
</style>