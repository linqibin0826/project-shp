<script>
import Swiper from "swiper";

export default {
    name: "Carousel",
    props: ['carousels'],
    methods: {
        initSwiper() {
            if (this.mySwiper) {
                this.mySwiper.destroy(); // 销毁旧的Swiper实例
            }
            this.mySwiper = new Swiper(this.$refs.carousel, {
                loop: true,
                autoplay: true,
                pagination: {
                    el: '.swiper-pagination', // 分页器
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next', // 下一页按钮
                    prevEl: '.swiper-button-prev', // 上一页按钮
                },
            });
        },
    },
    watch: {
        carousels: {
            immediate: true,
            handler() {
                this.$nextTick(() => {
                    this.initSwiper();
                })
            }
        }
    }
}
</script>

<template>
    <div class="swiper-container" ref="carousel">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="carousel in carousels" :key="carousel.id">
                <img :src="carousel.imgUrl" alt="">
            </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>