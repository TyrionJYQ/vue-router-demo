<template>
  <div class="wrapper">
    <div class="link">
      <router-link to="/main" exact>主页</router-link>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
    </div>
    <router-view></router-view>
    <router-view name="side-nav"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: "app-router"
};
</script>

<style scoped>
/* div.wrapper .link {
    display: none;
} */

</style>