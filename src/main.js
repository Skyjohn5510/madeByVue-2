import Vue from 'vue'
import App from './App.vue'

import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'


Vue.config.productionTip = false


Vue.use(App);
Vue.use(Vuetify);
var vm = new Vue({
    el: '#app',
    data:{
        titleApp:"taesting"
    },
    render: h => h(App)
}).$mount('#app');
