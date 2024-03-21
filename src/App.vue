<template>
  <div id="app">
    test github actions 1
    <!-- <div style="height: 100vh;height: 40vh;" v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-spinner="cuifont icon_alert_urgent"
    element-loading-background="rgba(0, 0, 0, 0.8)"></div>
    <el-button size="small" type="primary" :loading="true" >加载中...</el-button> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return {
      loading: true
    }
  }
}
</script>

<style lang="scss" scoped>
// ::v-deep .el-button {
//   .el-icon-loading {
//     font-family: "cuifont" !important;
//     &::before {
//       content: "\e795";
//     }
//   }
// }
</style>
