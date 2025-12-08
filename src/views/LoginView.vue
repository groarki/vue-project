<script setup lang="ts">
import { login } from '@/api/user'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(false)

const handleLoginUser = async (userData) => {
  try {
    isLoading.value = true
    await login(userData)
    router.replace('/map')
  } catch (error) {
    console.log(error.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLoginUser" :is-loading="isLoading" />
</template>
