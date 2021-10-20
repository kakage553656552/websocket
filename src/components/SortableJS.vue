<template>
  <div>
    {{ tabsList }}
    <el-tabs v-model="activeName">
      <el-tab-pane
        ref="tab"
        v-for="item in tabsList"
        :key="item"
        :label="item"
        :name="item"
        >{{ item }}===connect</el-tab-pane
      >
    </el-tabs>
    <!-- <ul class="tab">
        <li>item 1</li>
        <li>item 2</li>
        <li>item 3</li>
    </ul> -->
  </div>
</template>

<script>
import Sortable from "sortablejs";
export default {
  name: "SortableJS",
  data() {
    return {
      tabsList: ["111", "222", "333"],
      activeName: "111",
      arr: [],
    };
  },
  mounted() {
    this.rowDrop(); //行拖拽效果
  },
  methods: {
    rowDrop() {
      setTimeout(() => {
        const el = document.querySelector(".el-tabs__nav");
        const _this = this;
        Sortable.create(el, {
          onEnd({ newIndex, oldIndex }) {
            //oldIIndex拖放前的位置， newIndex拖放后的位置
            const currRow = _this.tabsList.splice(oldIndex, 1)[0]; //鼠标拖拽当前的el-tabs-pane
            _this.tabsList.splice(newIndex, 0, currRow); //tabsList 是存放所以el-tabs-pane的数组
          },
        });
        // Sortable.create(el, {
        //   animation: 1000,
        //   ghostClass: 'blue-background-class'
        // });
      }, 1000);
    },
  },
};
</script>
