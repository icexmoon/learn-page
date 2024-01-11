import { createRouter, createWebHistory } from 'vue-router'
import LayoutVue from '@/views/layout/index.vue'
import LoginVue from '@/views/login/index.vue'
import HomeVue from '@/views/home/index.vue'
import CategoryVue from '@/views/category/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LayoutVue,
      children: [
        { path: '', component: HomeVue },
        { path: '/category', component: CategoryVue }
      ]
    },
    { path: '/login', component: LoginVue }
  ]
})

export default router
