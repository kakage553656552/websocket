<template>
  <div>
    11{{dis}}
    <el-button type="primary" :loading="dis">add</el-button>
  </div>
</template>
 
 <script>
export default {
  data() {
    return {
      loading: true,
      dis:''
    }
  },
  methods: {
  }
}

</script>