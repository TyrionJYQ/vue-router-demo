<template>
    <div id="login">
       <input type="button" value="登录" @click="doLogin">
       
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            msg: 'login'
        }
    },
    methods: {
        doLogin() {
            setTimeout(() => {
                console.log('登录成功')
                localStorage.setItem('IS_LOGIN', true)
                this.$router.push({name: 'mainPage'})
                },300
            )
        }
    }
}
</script>