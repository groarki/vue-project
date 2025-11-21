<script setup>
import CommonButton from '@/components/CommonButton/CommonButton.vue'
import { reactive, toRaw } from 'vue'
import IIinput from '@/components/IInput/IIinput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'

const emit = defineEmits(['submit'])

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
    <CommonButton class="mt-7" type="submit">Створити акаунт</CommonButton>
  </FormContainer>
</template>
