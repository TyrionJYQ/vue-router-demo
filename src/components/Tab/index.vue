<template>
  <div class="tab">
    <!-- <router-link to="/main/home">首页</router-link>
    <router-link to="/main/articles" exact>文章</router-link>
    <router-link to="/main/category">归档</router-link>
    <router-link to="/main/about">关于</router-link>
    <router-link to="/main/abo222ut">其他</router-link> -->
    <router-link :to="{name: 'home'}">首页</router-link>
    <router-link :to="{name: 'articles'}" exact>文章</router-link>
    <router-link :to="{name: 'category'}">归档</router-link>
    <router-link :to="{name: 'about'}">关于</router-link>
    <router-link to="/dads/asdasdas">其他</router-link>
    <div>
      <!-- <span @click="go('home')">首页</span>
      <span  @click="go('articles')">文章</span>
      <span  @click="go('category')">归档</span>
      <span  @click="go('about')">关于</span>
      <span  @click="go('abo222ut')">其他</span> -->
      
    </div>
  </div>
</template>

<script>

export default {
  name: "tab",
  methods: {
    go(name) {
      // push方法传参方式有多种
      // 字符
      // 对象
      // 当设置path时，params会失效，为什么会失效，因为path本身就包含params
      // 在实际项目开发中建议将name定义为常量，所有路由对应的name都从常量中引入
      this.$router.push({name})
    }
  }
};
</script>

<style global>
.router-link-active {
  color: green;
}
</style>