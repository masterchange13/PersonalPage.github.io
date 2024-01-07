<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <el-menu-item index="1" class="titleName">
      <el-icon><Management /></el-icon>
      <template #title>Link world</template>
    </el-menu-item>

    <el-sub-menu index="2" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>图书信息维护</span>
      </template>
      <el-menu-item
        index="1-1"
        class="menu"
        @click="$emit('addTab', 'LibrarySortEnter', '图书分类录入')"
        >图书分类录入</el-menu-item
      >
      <el-menu-item
        index="1-2"
        class="menu"
        @click="$emit('addTab', 'StorePositionEnter', '存放位置录入')"
        >存放位置录入</el-menu-item
      >
      <el-menu-item index="1-3" class="menu">图书录入</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="3" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>会员信息维护</span>
      </template>
      <el-menu-item index="2-1" class="menu">会员表</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="4" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>图书信息维护</span>
      </template>
      <el-menu-item index="3-1" class="menu">图书借阅单</el-menu-item>
      <el-menu-item index="3-2" class="menu">借阅明细</el-menu-item>
      <el-menu-item index="3-3" class="menu">图书归还单</el-menu-item>
    </el-sub-menu>

    <el-sub-menu index="5" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span>个人主页</span>
      </template>
    </el-sub-menu>

    <el-sub-menu index="6" class="menu">
      <template #title>
        <el-icon><Management /></el-icon>
        <span @click="github">Github</span>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

    <script>
export default {
  data() {
    return {};
  },
   methods:{
      github(){
          // 跳转到github
          window.location.href = "https://github.com/masterchange13";  
      }
  }
};
</script>
  
  
  <script setup>
import { ref, defineExpose } from "vue";
import { Management } from "@element-plus/icons-vue";

const isCollapse = ref(false);

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

defineExpose({
  isCollapse,
});
</script>
  
  <style scoped>
.el-menu-vertical,
.el-menu-vertical:not(.el-menu--collapse) {
  height: 100vh;
}
.titleName {
  font-size: 24px;
  font-weight: 600;
}
.menu {
  font-size: 14px;
}
</style>