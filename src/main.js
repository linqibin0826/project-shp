import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import TypeNav from "@/components/TypeNav/index.vue";
import store from "@/store";

import '@/mock/mock'
import 'swiper/css/swiper.css';


Vue.config.productionTip = false
Vue.config.devtools = true

// 注册成全局组件
Vue.component(TypeNav.name, TypeNav);

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')
