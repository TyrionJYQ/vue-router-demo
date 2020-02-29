<template>
  <div class="main">
      <Tab/>
    <router-view></router-view>
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

