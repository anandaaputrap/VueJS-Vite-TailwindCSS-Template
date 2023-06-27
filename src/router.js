import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import ListDataMenu1 from './pages/menu1/ListDataMenu1.vue'
import TambahDataMenu1 from './pages/menu1/TambahDataMenu1.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard
    },
    {
      path: '/listdatamenu1',
      name: 'listdatamenu1',
      component: ListDataMenu1
    },
    {
      path: '/tambahdatamenu1',
      name: 'tambahdatamenu1',
      component: TambahDataMenu1
    }
  ]
})

export default router
