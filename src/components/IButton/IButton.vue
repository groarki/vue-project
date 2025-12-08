<script setup>
import { computed, defineProps } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  variant: {
    default: 'primary',
    type: String,
  },
  to: String,
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const bgStyles = computed(() => {
  return props.variant === 'gradient' ? 'bg-linear-to-r from-peach to-primary' : 'bg-[#FFA279]'
})

const isLink = computed(() => !!props.to)

const componentName = computed(() => {
  return isLink.value ? RouterLink : 'button'
})

const link = computed(() => (isLink.value ? props.to : undefined))
</script>

<template>
  <component
    :is="componentName"
    :class="bgStyles"
    class="transition delay-150 duration-150 ease-out hover:shadow-xl hover:scale-95 rounded-lg py-3 px-7 text-white cursor-pointer text-xs font-bold"
    :to="link"
  >
    <template v-if="props.isLoading"> Loading... </template>
    <template v-else>
      <slot></slot>
    </template>
  </component>
</template>
