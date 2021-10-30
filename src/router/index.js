import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Favourite from '../views/Favourite.vue'
Vue.use(VueRouter)

const routes = [{
    path: "/home",
    component: Home
}, {
    path: "/favourite",
    component: Favourite
}, {
    path: "*",
    redirect: "/home"
}]

const router = new VueRouter({
    routes
})

export default router