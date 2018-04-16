import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Financial from '../financial/index.vue'
import WhiteBar from '../whiteBar/index.vue'
import "../../css/reset.scss"
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/Home'
        },
        {
            path: "/Home",
            name: "Home",
            component: Home,
        },
        {
            path: '/financial',
            name: 'Financial',
            component: Financial,
        },
        {
            path: '/whiteBar',
            name: 'WhiteBar',
            component: WhiteBar,
        },
    ],
})
