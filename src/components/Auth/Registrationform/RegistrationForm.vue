<script setup>
import { reactive, toRaw } from 'vue'
import IIinput from '@/components/IInput/IInput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

const userData = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IIinput
      class="mb-4"
      label="Повне ім'я"
      placeholder="Ратушняк Ілона"
      type="text"
      v-model="userData.name"
    />
    <IIinput
      class="mb-4"
      label="E-mail"
      placeholder="email@gmail.com"
      type="email"
      v-model="userData.email"
    />
    <IIinput label="Пароль" placeholder="********" type="password" v-model="userData.password" />
    <IButton class="mt-7 w-full" type="submit" variant="gradient" :is-loading="props.isLoading"
      >Створити акаунт</IButton
    >
  </FormContainer>
</template>
