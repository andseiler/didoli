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
  ],
  scrollBehavior(to, from, savedPosition) {
    // If the user uses browser navigation buttons and a saved position exists
    if (savedPosition) {
      return savedPosition
    }
    
    // Otherwise, scroll to top
    return { 
      top: 0,
      behavior: 'instant' // Changed from 'smooth' to ensure immediate scrolling
    }
  }
})

// Navigation guard to update page title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Didoli'
  next()
})

export default router 