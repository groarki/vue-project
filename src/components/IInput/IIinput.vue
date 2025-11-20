<script setup>
import { ref } from 'vue'

const props = defineProps({
  label: String,
})
</script>

<template>
  <div class="w-full">
    <label class="block">
      <span class="mb-2 pl-4 block text-xs">{{ props.label }}</span>
      <input
        class="focus:outline-primary rounded-sm border border-[#2b2b2b]/10 w-full h-12 p-4 text-sm leading-5 tracking-tight"
        v-bind="{ ...$props, ...$attrs }"
      />
    </label>
  </div>
</template>
