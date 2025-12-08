<script setup lang="ts">
import { register } from '@/api/user'
import RegistrationForm from '@/components/Auth/Registrationform/RegistrationForm.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const isLoading = ref(false)

const handleRegisterUser = async (userData) => {
  try {
    isLoading.value = true
    await register(userData)
    router.replace('/map')
  } catch (error) {
    console.log(error.message)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" :is-loading="isLoading" />
</template>
