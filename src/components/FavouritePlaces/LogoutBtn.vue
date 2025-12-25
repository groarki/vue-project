<script setup>
import { useRouter } from 'vue-router'
import LogoutIcon from '../icons/LogoutIcon.vue'
import { useMutation } from '@/composables/useMutation'
import { logout } from '@/api/user'
import { authService } from '@/api/authService'

const router = useRouter()

const { mutation: logoutUser, isLoading } = useMutation({
  mutationFn: () => logout(),
  onSuccess: () => {
    authService.clearToken()
    router.replace({ name: 'login' })
  },
})
</script>

<template>
  <button
    class="flex gap-2 cursor-pointer items-center px-6 text-black absolute bottom-5"
    @click="logoutUser"
  >
    <span v-if="isLoading">Вилогування...</span>
    <span v-else>Вихід </span>
    <LogoutIcon />
  </button>
</template>
