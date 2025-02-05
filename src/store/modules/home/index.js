import {getBaseCategoryList} from "@/api/product";
import {reqGetBanner} from "@/api/mock-api";

const home = {
    state: {
        categories: [],
        banners: [],
    },
    mutations: {
        UPDATE_CATEGORIES(state, categories) {
            state.categories = categories;
        },
        UPDATE_BANNERS(state, banners) {
            state.banners = banners;
        }
    },
    actions: {
        async reqCategoryList({commit}) {
            const response = await getBaseCategoryList();
            commit('UPDATE_CATEGORIES', response.data);
        },
        async reqBannerList({commit}) {
            const response = await reqGetBanner();
            commit('UPDATE_BANNERS', response.data);
        }
    },
    getters: {
        categories: state => state.categories,
        banners: state => state.banners,
    }
}

export default home;