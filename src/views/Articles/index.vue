<template>
  <div id="articles">
    <div v-for="(article,i) in articles" :key="article.id">
     <h3 @click="goDetail(i)">{{article.title}}</h3>
    </div>
    <router-view/>
  </div>
</template>

<script>

import { paginationConfig } from "@config/pageConfig";
import { getArticles } from "@api/article";
export default {
  name: "articles",
  data() {
    return {
     articles: []
    };
  },
  methods: {
      goDetail(i) {
          
          this.$router.push({name:'detail',params:{id: 1,article:this.articles[i] }})
        //   const path = `/main/articles/article/${this.articles[i].id}`
        //   this.$router.push({path,params:{article: this.articles[i]}})
      }
  },
  beforeRouteLeave(to, from,next) {
    var res = confirm('信息尚未保存，是否离开?')
    if(res) {
        next()
      } else {
        next(false)
      }
  },
  created() {
    getArticles(paginationConfig).then(
      data => {
        if (data.code === "001") {
          const { articles, counts } = data;
          this.articles = articles;
        }
      },
      err => console.log(err)
    );
  }
};
</script>

