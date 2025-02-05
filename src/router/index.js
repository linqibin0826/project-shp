import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 保存原始的 push 方法
const originalPush = VueRouter.prototype.push;
const originalReplace = VueRouter.prototype.replace;

// 重写 push 方法
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) {
        // 若用户手动传递了回调函数，直接调用原始方法
        return originalPush.call(this, location, onResolve, onReject);
    }
    // 若未传递回调函数，捕获 Promise 异常
    return originalPush.call(this, location).catch(err => err);
};

// 重写 replace 方法
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
    if (onResolve || onReject) {
        return originalReplace.call(this, location, onResolve, onReject);
    }
    return originalReplace.call(this, location).catch(err => err);
};




const routes = [
    {
        path: "/",
        component: () => import("@/views/Home/index.vue"),
        meta: { showFooter: true },
    },
    {
        path: "/home",
        component: () => import("@/views/Home/index.vue"),
        meta: { showFooter: true }
    },
    {
        path: "/login",
        component: () => import("@/views/Login/index.vue"),
        meta: { showFooter: false }
    },
    {
        path: "/register",
        component: () => import("@/views/Register/index.vue"),
        meta: { showFooter: false },
    },
    {
        path: "/search/:keyword?",
        component: () => import("@/views/Search/index.vue"),
        meta: { showFooter: true },
        name: 'search'
    },
]

const router = new VueRouter({
    routes
});

export default router