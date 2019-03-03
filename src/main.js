import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'

import store from './store/appStore'
import router from  './router.vue'

Vue.config.productionTip = false

Vue.use(App);
Vue.use(Vuetify);
new Vue({
    el: '#app',
    store,
    router,
    data:{
        titleApp:"taesting"
    },
    render: h => h(App)
}).$mount('#app');
