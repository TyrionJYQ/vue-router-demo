import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@router/routes'

Vue.use(VueRouter)

const router = new VueRouter({
    // mode:'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     const hasLogin = localStorage.getItem('IS_LOGIN')
//     console.log('router before each')
//     if (to.name !== 'login' && !hasLogin) {
//         debugger
//         next({ path: '/login' })
//     } else {
//         next()
//     }

// })
export default router