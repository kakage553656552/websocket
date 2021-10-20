<template>
  <div>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="Name">
        <el-input v-model="formInline.name" placeholder="请输入名字"></el-input>
      </el-form-item>
      <el-form-item label="Age">
        <el-input v-model="formInline.age" placeholder="请输入年龄"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <div v-loading="loading">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="Id"> </el-table-column>
        <el-table-column prop="name" label="Name"> </el-table-column>
        <el-table-column prop="age" label="Age"> </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "apiTest",
  data() {
    return {
      tableData: [],
      loading: false,
      formInline:{}
    };
  },
  created() {
    this.test();
  },
  methods: {
    test() {
      this.loading = true;
      this.$http.get("/test").then((res) => {
        console.log(res);
        this.tableData = res.data;
        this.loading = false;
      });
    },
    onSubmit() {
      console.log(this.formInline);
      this.loading = true;
      var params = this.formInline
      this.$http.post("/insert",params).then((res) => {
        console.log(res);
        this.loading = false;
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
