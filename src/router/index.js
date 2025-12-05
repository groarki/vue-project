import { createRouter, createWebHistory } from 'vue-router'
import GreetingPage from '@/views/GreetingPage.vue'
import HomePage from '@/views/HomePage.vue'
import AuthView from '@/views/AuthView.vue'

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: HomePage },
  { path: '/auth', component: AuthView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
