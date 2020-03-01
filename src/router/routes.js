import About from '@views/About'
import Articles from '@views/Articles'
import Home from '@views/Home'
import Category from '@views/Category'
import Register from '@views/Register'
import Login from '@views/Login'
import MainPage from '@views/Main'
import NotFound from '@components/test/404'
import Random from '@components/test/Random'
import NavBar from '@components/test/NavBar'
import Bottom from '@components/test/Bottom'

export default [
    {
        path: '/main',
        name: 'mainPage',
        components: {
            default: MainPage,
            'side-nav': NavBar,
            bottom: Bottom
        },
        // beforeEnter: (to,from,next) => {   //路由守卫
        //     next('/login')
        // },
        children: [
            {
                path: 'about',
                component: About,
                name: 'about',
                // 别名测试
                // alias:['ggg','over'],   //数组 多个别名
                alias: 'ggg' // 字符串,一个别名 
            },
            { path: 'home', component: Home, name: 'home' },
            { path: 'category', component: Category, name: 'category' },
            { path: 'articles', component: Articles, name: 'articles' },
            {
                name: 'detail',
                path: 'articles/:id',
                component: resolve => require(['@components/Detail'], resolve),
                props: true,
                children: [
                    {
                        path: 'p',
                        component: Random
                    }
                ]
            }
        ]
    },

    // { path: '/', redirect: '/main/home' },
    // { path: '/', redirect: {name: 'about'} },
    {
        path: '/',     // 重定向
        redirect: to => {
            console.log(to)
            // return 'main/articles'  //字符形式
            return { name: 'articles' }  // 对象形式
        }

    },

    { path: '/login', component: Login, name: 'login' },
    { path: '/register', component: Register, name: 'register' },
    { path: '*', component: NotFound, name: '404', name: '*' }
]