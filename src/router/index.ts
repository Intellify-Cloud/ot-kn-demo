import { createRouter, createWebHistory } from 'vue-router'
import { useSeoHead } from '@/composables/useSeoHead'
import { nextTick } from 'vue'
import { siteText } from '@/content/siteText'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue'),
      meta: {
        title: 'Home',
        description: siteText.site.description,
      },
    },
    {
      path: '/portfolio/',
      component: () => import('@/views/PortfolioView.vue'),
      meta: {
        title: 'Portfolio',
        description: 'Placeholder portfolio route for future template sites.',
      },
    },
    {
      path: '/contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Contact',
        description: 'Placeholder contact route for future template sites.',
      },
    },
    {
      path: '/privacy-policy/',
      component: () => import('@/views/PrivacyView.vue'),
      meta: {
        title: 'Privacy Policy',
        description: `Privacy policy for ${siteText.site.name}.`,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    if (to.hash) {
      return new Promise((resolve) => {
        nextTick(() => {
          resolve({ el: to.hash, behavior: 'smooth' })
        })
      })
    }

    return { top: 0 }
  },
})

router.afterEach((to) => {
  useSeoHead({
    title: to.meta.title as string,
    description: to.meta.description as string,
    path: to.path,
  })
})

export default router
