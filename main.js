import Vue from 'vue'
import App from './app.vue'
import './src/assets/css/main.css'
import route from './router/router.js'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
window.onload = function() {
    new Vue({
        el: '#app',
        components: { App },
        router: route,
        render: h => h(App)
    })
}
