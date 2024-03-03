import {createRouter,createWebHistory} from "vue-router";
const routes=[
    {
        path:'/',
        component: ()=>import("../components/OptionsApi.vue")
    },
    {
        path:'/composition',
        component: ()=>import("../components/CompositionApi.vue")
    }
];
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router;