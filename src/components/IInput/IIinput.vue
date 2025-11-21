<script setup>
const props = defineProps({
  label: String,
  modelValue: String,
})

defineOptions({
  inheritAttrs: false,
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="w-full">
    <label class="block">
      <span class="mb-1 pl-3 block text-[11px]">{{ props.label }}</span>
      <input
        class="focus:outline-primary rounded-lg border border-[#2b2b2b]/10 w-full h-11 p-3 text-[13px] leading-5 tracking-tight"
        v-bind="{ ...$props, ...$attrs }"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </label>
  </div>
</template>
