<script>
import ListContainer from "@/views/Home/ListContainer/index.vue";
import TodayRecommend from "@/views/Home/TodayRecommend/index.vue";
import Rank from "@/views/Home/Rank/index.vue";
import Like from "@/views/Home/Like/index.vue";
import Floor from "@/views/Home/Floor/index.vue";
import Brand from "@/views/Home/Brand/index.vue";
import {mapActions, mapGetters} from "vuex";

export default {
    name: "Home",
    components: {
        Brand,
        Floor,
        Rank,
        Like,
        ListContainer,
        TodayRecommend
    },
    computed: {
        ...mapGetters(['floorList'])
    },
    methods: {
        ...mapActions(['reqFloorList']),
    },
    mounted() {
        this.reqFloorList()
    }
}
</script>

<template>
    <div>
        <!-- 三级分类 -->
        <type-nav/>
        <list-container/>
        <today-recommend/>
        <rank/>
        <like/>
        <floor v-for="floor in floorList" :key="floor.id" :floor="floor"/>
        <brand/>
    </div>
</template>

<style scoped lang="less">

</style>