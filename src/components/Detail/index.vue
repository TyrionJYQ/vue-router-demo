<template>
    <div class="article">
        <!-- <div v-html="$route.params.article.content"></div> -->
        <!-- <div>User {{ $route.params.article.id }}</div> -->
        <div>{{Math.random()}}</div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    props:['id'],
    created() {
        console.log(this.id)    
        console.log(this.$route)
    }
}
</script>
