import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('../views/Users.vue'),
    },
    {
      path: '/concrete',
      name: 'concrete',
      component: () => import('../views/ConcreteUser.vue'),
    },
    {
      path: '/blog-posts',
      name: 'blog-posts',
      component: () => import('../views/BlogPosts.vue'),
    },
    {
      path: '/posts/:id',
      name: 'posts',
      component: () => import('../components/Article.vue'),
      props: true,
    },
  ],
})

export default router
