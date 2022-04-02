<template>
  <div>
    11{{visible}}
    <el-button type="primary" @click="visible = !visible">add</el-button>
    <Dialog :visible="visible" title="title" :show-close="true" width="800px" top="200px" :before-close="beforeCloseHander" >
      <div slot="title">
        <div style="color:red">slot title</div>
      </div>
      999999999
    </Dialog>
  </div>
</template>
 
 <script>
export default {
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
  }
}

</script>