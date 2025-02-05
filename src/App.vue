<template>
    <div id="app">
        <Header></Header>
        <!-- 路由组件占位符 -->
        <router-view></router-view>
        <Footer v-show="$route.meta.showFooter"></Footer>
    </div>
</template>

<script>
import Header from "@/components/Header/index.vue";
import Footer from "@/components/Footer/index.vue";
import {mapActions} from "vuex";

export default {
    name: 'App',
    components: {Header, Footer},
    methods: {
        ...mapActions({
            reqCategoryList: 'reqCategoryList'
        }),
    },
    mounted() {
        // 放在root容器中，只获取一次3级分类
        this.reqCategoryList();
    }
}
</script>

<style>

</style>