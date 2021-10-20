<template>
  <div>
    <el-input v-model="msg" placeholder="请输入内容"></el-input>
    <div v-for="item in arr" :key="item">{{ item }}</div>
    <el-button style="margin-top: 20px" @click="submit" type="primary"
      >提交</el-button
    >
    <el-button @click="test" type="primary">testApi</el-button>
  </div>
</template>

<script>
import { io } from "socket.io-client";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "",
      socket: null,
      arr: [],
    };
  },
  created() {
    this.socket = io("http://127.0.0.1:9000");
    this.socket.on("connect", () => {
      this.$message.success("你连接上websocket啦");
    });
    this.socket.on("message", (msg) => {
      this.arr.push(msg);
    });
  },
  methods: {
    submit() {
      this.socket.emit("message", this.msg);
      this.msg = "";
    },
    test() {
      this.$http.get("/test").then((res) => {
        console.log(res);
      });
    },
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
