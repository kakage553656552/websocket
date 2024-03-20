<template>
  <div class="pageheader">
    <div></div>
    <div style="width: 100px;display: flex;align-items: center;justify-content: space-between;">
      <div class="">{{ $store.state.user.userInfo.name }}</div>
      <div class="right cursor icon-link" @click="signOut">Sign Out</div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
export default {
  data () {
    return {
    }
  },
  methods: {
    async signOut () {
      this.$confirm('Are you sure you want to log out?', 'Prompt', {
        confirmButtonText: 'Confirm',
        cancelButtonText: 'Cancel',
        type: 'warning'
      }).then(async() => {
        let params = {
          id: this.$store.state.user.userInfo.id
        }
        const { data: res } = await api.signOut(params)
        if (res.code !== 0) {
          return this.$message.error(res.message)
        }
        localStorage.removeItem('token')
        this.$store.commit('user/deleteUserInfo');
        this.$router.push('/login')
        this.$message({
          type: 'success',
          message: 'Logged out successfully!'
        });
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: ''
        // });
      });

    }
  }
}
</script>

<style scoped>
.pageheader {
  display: flex;
  height: 50px;
  background-color: #002754;
  justify-content: space-between;
  align-items: center;
  color: white;
}

.pageheader .right {
  margin-right: 10px;
  font-size: 12px;
}
</style>