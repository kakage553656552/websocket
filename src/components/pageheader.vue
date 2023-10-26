<template>
  <div class="pageheader">
    <div></div>
    <div class="right" @click="signOut">Sign Out</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    signOut() {
      localStorage.removeItem('token')
      this.$router.push('/login')
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
}
</style>