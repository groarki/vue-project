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
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/registration',
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
  const publicRoutes = ['greeting']
  const { name } = to
  const isLoggedIn = authService.isLoggedIn()

  if (authRoutes.includes(name) && isLoggedIn) {
    next({ name: 'homepage' })
  } else if (!isLoggedIn && !authRoutes.includes(name) && !publicRoutes.includes(name)) {
    next({ name: 'login' })
  } else {
    next()
  }
})
