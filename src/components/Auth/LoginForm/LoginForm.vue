<script setup>
import IIinput from '@/components/IInput/IIinput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'
import { reactive, toRaw } from 'vue'
import IButton from '@/components/IButton/IButton.vue'

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
      type="textarea"
      v-model="userData.email"
    />
    <IIinput label="Пароль" placeholder="**********" type="password" v-model="userData.password" />
    <IButton class="mt-7 w-full" variant="gradient" type="submit">Увійти </IButton>
  </FormContainer>
</template>
