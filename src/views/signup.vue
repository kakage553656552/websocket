<template>
  <div class="login-container">
    <el-form label-position="left" :inline="true" :model="formInline" class="login-form">
      <el-form-item label="Name:" label-width="100px">
        <el-input size="mini" v-model="formInline.name" placeholder="" style="width: 200px;"></el-input>
      </el-form-item>
      <el-form-item label="Password:" label-width="100px">
        <el-input size="mini" v-model="formInline.password" placeholder="" show-password style="width: 200px;"></el-input>
      </el-form-item>
    </el-form>
    <div class="login-buttons">
      <el-button size="mini" @click="handleClose">Cancel</el-button>
      <el-button size="mini" type="primary" @click="onSubmit(formInline)" :loading="loading">Comfirm</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      loading: false,
      formInline: {},
    };
  },
  methods: {
    handleClose() {
      this.dialogVisible = false;
      this.formInline = {};
    },
    onSubmit() {
      this.loading = true;
      var params = this.formInline
      this.$http.post("/insert",params).then(({data:res}) => {
        this.loading = false;
        if(res.code !== 0) {
          return this.$message.error(res.msg)
        }
        this.getUserList()
        this.handleClose()
      }).catch(()=>{
        this.loading = false;
        this.handleClose()
      })
    }
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 30vh auto;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  background-color: #f9f9f9;
}

.login-form {
  margin-bottom: 20px;
}

.login-buttons {
  text-align: right;
}
</style>
