<template>
  <div class="tab">
    <router-link to="/main/home">首页</router-link>
    <router-link to="/main/articles">文章</router-link>
    <router-link to="/main/category">归档</router-link>
    <router-link to="/main/about">关于</router-link>
  </div>
</template>

<script>
export default {
  name: "tab"
};
</script>

<style global>
.router-link-active {
  color: green;
}
</style>