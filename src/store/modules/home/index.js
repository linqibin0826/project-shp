import {getBaseCategoryList} from "@/api/product";
import {reqGetBanner, reqGetFloorList} from "@/api/mock-api";

const home = {
    state: {
        categories: [],
        banners: [],
        floorList: [],
    },
    mutations: {
        UPDATE_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        UPDATE_BANNERS(state, banners) {
            state.banners = banners;
        },
        UPDATE_FLOOR_LIST(state, floorList) {
          state.floorList = floorList;
        },
    },
    actions: {
        async reqCategoryList({commit}) {
            const response = await getBaseCategoryList();
            commit('UPDATE_CATEGORIES', response.data);
        },
        async reqBannerList({commit}) {
            const response = await reqGetBanner();
            commit('UPDATE_BANNERS', response.data);
        },
        async reqFloorList({commit}) {
            const response = await reqGetFloorList();
            commit('UPDATE_FLOOR_LIST', response.data);
        }
    },
    getters: {
        categories: state => state.categories,
        banners: state => state.banners,
        floorList: state => state.floorList,
    }
}

export default home;