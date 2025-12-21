<script setup>
import IModal from './IModal.vue'
import IIinput from '../IInput/IInput.vue'
import IButton from '../IButton/IButton.vue'
import InputImage from '../IInput/InputImage.vue'
import MapIcon from '../icons/MapIcon.vue'
import { computed, reactive } from 'vue'

const props = defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
  hasError: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['close', 'submit'])

const formData = reactive({
  title: '',
  description: '',
  img: '',
})

const handleUpload = (url) => {
  formData.img = url
}

const uploadText = computed(() => {
  return formData.img ? 'Натисніть тут, щоб змінити' : 'Натисніть тут, щоб додати фото'
})

const resetForm = () => {
  ;((formData.description = ''), (formData.img = ''), (formData.title = ''))
}
</script>

<template>
  <IModal v-if="props.isOpen" @close="emit('close')">
    <form @submit.prevent="emit('submit', formData, resetForm)" class="flex flex-col min-w-[420px]">
      <div class="flex gap-2 justify-center mb-10">
        <MapIcon />
        <span class="font-bold text-[16px] text-center">Додати маркер</span>
      </div>
      <IIinput label="Локація" class="mb-[18px]" v-model="formData.title" />
      <IIinput
        class="mb-4"
        type="textarea"
        label="Опис"
        placeholder="Введіть текст"
        v-model="formData.description"
      />
      <div class="flex gap-2 items-center">
        <img v-if="formData.img" :src="formData.img" alt="preview" class="w-10 h-10 object-cover" />
        <InputImage @uploaded="handleUpload"> {{ uploadText }}</InputImage>
      </div>
      <IButton variant="gradient" class="mt-10" :is-loading="props.isLoading">Додати</IButton>
      <p v-if="props.hasError" :has-error="props.hasError" class="text-red-500">
        Щось пішло не так
      </p>
    </form>
  </IModal>
</template>
