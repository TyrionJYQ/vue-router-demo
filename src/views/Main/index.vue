<template>
  <div class="main">
    <Tab/>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Tab from "@components/Tab";
export default {
    name: 'main1',
    components: {
        Tab
    }
};
</script>


<style scoped>
.content {
  /* height: 100px; */
  background-color: aquamarine;
  height: auto;
  margin-left: 80px;
}
.side-nav {
  background-color: blueviolet; 
}
</style>

