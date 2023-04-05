<!-- 视图区 -->
<template>
  <div class="nav">
    <router-link to="/home">首页</router-link>
    <router-link to="/att">关注</router-link>
    <router-link to="/login">登录</router-link>
  </div>


  <!-- 当前路由的视图区 -->
  <router-view></router-view>
</template>


<!-- js代码部分 -->
<script>
export default {
  data() {
    return {

    }
  }
}


</script>


<!-- 样式设置 -->
<style scoped>
.nav {
  position: absolute;
  top: 10px;
  right: 10px;
}

a {
  margin-left: 30px;
  margin-right: 30px;
}
</style>