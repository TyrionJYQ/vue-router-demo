import App from '@views/App.vue'
import Vue from 'vue'
import router from '@router'




new Vue({
    el: '#app',
    router,
    render(h) {
        return h(App)
    }
})
