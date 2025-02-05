import Vue from 'vue'
import Vuex from 'vuex'
import home from "@/store/modules/home";
import search from "@/store/modules/search";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        home,
        search
    }
})

export default store;