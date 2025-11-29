<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    default: 'text',
    type: String,
  },
  label: String,
  modelValue: String,
})

defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits(['update:modelValue'])

const isTextarea = computed(() => {
  return props.type === 'textarea'
})

const baseStyles =
  'focus:outline-primary rounded-lg border border-[#2b2b2b]/10 w-full p-3 text-[13px] leading-5 tracking-tight'

const inputStyles = computed(() => {
  return isTextarea.value ? baseStyles + ' resize-none' : baseStyles
})

const componentName = computed(() => {
  return isTextarea.value ? 'textarea' : 'input'
})
</script>

<template>
  <div class="w-full">
    <label class="block">
      <span class="mb-1 pl-3 block text-[11px]">{{ props.label }}</span>
      <component
        :is="componentName"
        rows="3"
        :class="inputStyles"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
