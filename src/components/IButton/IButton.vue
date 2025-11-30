<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
  },
})

const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-linear-to-r from-peach to-primary' : 'bg-[#FFA279]'
})
</script>

<template>
  <button
    :class="bgStyles"
    class="transition delay-150 duration-150 ease-out hover:shadow-xl hover:scale-95 rounded-lg py-3 px-7 text-white cursor-pointer text-xs font-bold"
  >
    Почати роботу
  </button>
</template>
