// import Vue from 'vue'
// 对应你要跳转的组件
import HelloWorld from "../components/HelloWorld.vue";
import { createRouter, createWebHashHistory } from "vue-router"
import registerComponent from "../components/view/login/register.vue";
import button from "../components/Experiment/button.vue"

// import Router from 'vue-router'

// Vue.use(Router)
// export default new Router({
// const routes=({
//     routes: [
//         {path:'/',name:'hello',component:HelloWorld}
//     ]
// })

const routes = [
    {
        path: '/',
        component: () => import('../components/view/login/login.vue'),
        // children: [
        //     {
        //         path: '/',
        //         name: 'home',
        //         component: () => import('../components/view/login/login.vue')
        //     }
        // ]
    },
    {
        path: '/helloworld',
        name: 'helloworld',
        // route level code-splitting
        component: () => import('../components/HelloWorld.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => registerComponent,
    },
    {
        path: '/experiment/button',
        name: 'button',
        component: registerComponent,
    },
    {
        path: '/experiment/button',
        redirect: '/helloworld'
    },
    {
        path: '/aside/aside',
        name: 'aside',
        component: () => import('../components/aside/aside.vue'),
    },
    {
        path: '/utils/head',
        name: 'head',
        component: () => import('../components/utils/head/head.vue'),
    }
]

const router = createRouter({
    // history: createWebHashHistory(),
    routes
})

export default router
