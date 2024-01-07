<template>
  <nav>
    <div class="logo"><img src="../../../../public/zichso3.jpg" style="height: 80px; height: 80px;" /></div>
    <div class="el-menu-item" href="#">首页</div>
    <div class="el-menu-item" href="#">文章</div>
    <div class="el-menu-item" href="#">分享</div>
    <div class="el-menu-item" href="#">utils</div>
    <div class="el-menu-item" href="#">个人主页</div>
    <div class="el-menu-item" href="#">Github</div>
  </nav>
</template>
  <script>
export default {
  name: "Navbar",
};
</script>
  
  <style lang="css">
nav {
  display: flex;
  align-items: center;
  justify-content: center;
}
nav .el-menu-item {
  color: #ffffff;
  padding: 15px 100px;
  position: relative;
  text-align: center;
  border-bottom: transparent;
  display: flex;
  transition: 0.4s;
  font-size: larger;
  font-weight: bold;
}
nav .el-menu-item:hover {
  background-color: darkgray;
  border-bottom: solid 6px;
  border-bottom-color: brown;
  height: 80px;
}
</style>
  