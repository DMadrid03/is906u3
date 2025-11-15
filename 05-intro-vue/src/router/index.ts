import { createRouter, createWebHistory }from "vue-router";

 const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomePage.vue')
        },
        {
            path: '/about',
            name: 'about',
            component: () => import('@/views/AboutPage.vue')
        },
        {
            path: '/about/:id',
            name: 'about-detailed',
            component: () => import('@/views/AboutDetail.vue')
        }
        //ruta por defecto
        ,{
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: () => import('@/views/NotFoundPage.vue')
        }
    ]
})

export default router;