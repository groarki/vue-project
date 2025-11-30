<script setup>
import { defineEmits } from 'vue'
import { ref } from 'vue'

const emit = defineEmits(['uploaded'])
const errorMsg = ref('')

const handleUploadImage = (event) => {
  const file = event.target.files[0]

  if (file.size > 3 * 1024 * 1024) {
    errorMsg.value = 'Завеликий файл'
    return
  }
  const fileReader = new FileReader()

  fileReader.readAsDataURL(file)

  fileReader.onload = () => {
    errorMsg.value = ''
    emit('uploaded', fileReader.result)
  }
}
</script>

<template>
  <label class="cursor-pointer hover:text-primary">
    <input type="file" accept="image/*" class="hidden" @change="handleUploadImage" />
    <span class="flex gap-1 items-center">
      <svg width="16" height="16">
        <use href="/sprite.svg#icon-attachment-2"></use>
      </svg>
      <span class="underline text-xs">
        <slot></slot>
      </span>
    </span>
    <span v-if="errorMsg" class="text-xs text-red-500">{{ errorMsg }}</span>
  </label>
</template>
