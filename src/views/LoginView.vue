<script setup lang="ts">
import { authService } from '@/api/authService'
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
import { useMutation } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleLogin,
} = useMutation({
  mutationFn: (data) => authService.login(data),
  onSuccess: () => router.replace('/map'),
  onError: () => console.error(error),
})
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
</template>
