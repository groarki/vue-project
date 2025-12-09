<script setup lang="ts">
import { authService } from '@/api/authService'
import RegistrationForm from '@/components/Auth/Registrationform/RegistrationForm.vue'
import { useMutation } from '@/composables/useMutation'
import { useRouter } from 'vue-router'

const router = useRouter()

const {
  isLoading,
  error,
  mutation: handleRegister,
} = useMutation({
  mutationFn: (data) => authService.register(data),
  onSuccess: () => router.replace('/map'),
  onError: () => console.error(error),
})
</script>

<template>
  <RegistrationForm @submit="handleRegister" :is-loading="isLoading" />
</template>
