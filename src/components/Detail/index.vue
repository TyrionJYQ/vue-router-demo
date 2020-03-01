<template>
    <div class="article">
        <!-- <div v-html="$route.params.article.content"></div> -->
        <!-- <div>User {{ $route.params.article.id }}</div> -->
        <div>
            <router-link to="/main/articles/foo" exact>foo</router-link>|
            <router-link to="/main/articles/bar" exact>bar</router-link>|
             <router-link to="/main/articles/foo/p">foo-child</router-link>|
            <router-link to="/main/articles/bar/p">bar-child</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'detail',
    props:['id'],
    created() {
        console.log(this.id)    
        console.log(this.$route)
    },
    beforeRouteUpdate(to, from, next) {
        console.log('beforeRouteUpdate')
        console.log(to.params)
        if(to.params.id === 'bar') {
            next(false)
        }
        next()
    }
    // watch: {
    //     '$route' (to, from) {
    //         // 对路由变化作出响应...
    //         console.log(to)
    //         console.log(from)
    //     }
    // }
}
</script>
