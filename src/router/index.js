import { authService } from '@/api/authService'
import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('@/views/GreetingPage.vue')
const HomePage = () => import('@/views/HomeView.vue')
const AuthPage = () => import('@/views/AuthView.vue')
const LoginPage = () => import('@/views/LoginView.vue')
const RegistrationPage = () => import('@/views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage, name: 'greeting' },
  { path: '/map', component: HomePage, name: 'homepage' },
  {
    path: '/user',
    component: AuthPage,
    redirect: '/user/registration',
    children: [
      { path: 'login', component: LoginPage, name: 'login' },
      { path: 'registration', component: RegistrationPage, name: 'registration' },
    ],
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authRoutes = ['login', 'registration']
  const { name } = to
  if (authRoutes.includes(name) && authService.isLoggedIn()) {
    next({ name: 'homepage' })
  } else if (!authRoutes.includes(name) && !authService.isLoggedIn()) {
    console.log('redirecting unlogged user')
    next({ name: 'login' })
  } else {
    next()
  }
})
