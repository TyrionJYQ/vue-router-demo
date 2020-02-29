import About from '@views/About'
import Articles from '@views/Articles'
import Home from '@views/Home'
import Category from '@views/Category'
import Register from '@views/Register'
import Login from '@views/Login'
import MainPage from '@views/Main'
// import Detail from '@components/Detail'

export default [
    {
        path: '/main',
        component: MainPage,
        children: [
            { path: 'about', component: About },
            { path: 'home', component: Home },
            { path: 'category', component: Category },
            { path: 'articles', component: Articles },
            { name: 'detail',
              path: 'articles/article/:id', 
              component: resolve => require(['@components/Detail'],resolve),
                // component: () => import('../components/Detail/index.vue'),
             props: true
            }
        ]
    },
    // {
    //     name: 'detail',
    //     path: '/main/articles/:detail',
    //     component: Detail
    // },

    { path: '/login', component: Login },
    { path: '/register', component: Register }
]