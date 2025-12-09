import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import { router } from '../src/router/index.js'
import { authService } from './api/authService'

import App from './App.vue'

const token = localStorage.getItem('token')
if (token) {
  authService.setToken(token)
}
console.log(token, '2')
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
