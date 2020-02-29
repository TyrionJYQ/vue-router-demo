import App from '@views/App.vue'
import Vue from 'vue'
import router from '@router'

// Vue.use(VueRouter)

const div = document.createElement('div')
div.setAttribute('id', 'app')
document.body.appendChild(div)

new Vue({
    el: '#app',
    router,
    render(h) {
        return h(App)
    }
})
