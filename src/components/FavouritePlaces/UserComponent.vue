<script setup>
import { useMutation } from '@/composables/useMutation'
import UserIcon from '../icons/UserIcon.vue'
import { getMe } from '@/api/user'
import { onMounted } from 'vue'

const { data: userInfo, mutation: getUser } = useMutation({
  mutationFn: () => getMe(),
})

onMounted(() => {
  getUser()
})
</script>

<template>
  <div
    class="flex sticky top-0 items-center text-black gap-3 bg-[#ffe6dc] border-solid border-b border-[#f3743d]/40 rounded-bl-2xl rounded-br-2xl px-6 py-4"
  >
    <div class="w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary">
      <UserIcon class="text-white" />
    </div>
    <span v-if="userInfo">{{ userInfo.data.name }}</span>
  </div>
</template>
