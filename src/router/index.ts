import { createRouter, createWebHistory } from 'vue-router'

// Define routes for the application
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('../views/Home.vue'),
      meta: {
        title: 'Didoli - Automatische E-Mail-Ablage für Architekten & Planer'
      }
    },
    {
      path: '/impressum',
      name: 'Impressum',
      component: () => import('../components/Impressum.vue'),
      meta: {
        title: 'Impressum - Didoli'
      }
    },
    {
      path: '/datenschutz',
      name: 'Datenschutz',
      component: () => import('../components/Datenschutz.vue'),
      meta: { title: 'Datenschutz - Didoli' }
    }
  ]
})

// Navigation guard to update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Didoli'
  next()
})

export default router 