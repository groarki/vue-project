<script setup>
import IIinput from '@/components/IInput/IIinput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'
import { reactive, toRaw } from 'vue'
import CommonButton from '@/components/CommonButton/CommonButton.vue'

const emit = defineEmits(['submit'])

const userData = reactive({
  email: '',
  password: '',
})
</script>

<template>
  <FormContainer @submit.prevent="emit('submit', toRaw(userData))">
    <IIinput
      class="mb-4"
      label="E-mail"
      placeholder="email@gmail.com"
      type="email"
      v-model="userData.email"
    />
    <IIinput label="Пароль" placeholder="********" type="password" v-model="userData.password" />
    <CommonButton class="mt-7" type="submit">Увійти </CommonButton>
  </FormContainer>
</template>
