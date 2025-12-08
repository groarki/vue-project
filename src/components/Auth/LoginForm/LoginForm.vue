<script setup>
import IIinput from '@/components/IInput/IIinput.vue'
import FormContainer from '../FormContainer/FormContainer.vue'
import { reactive, toRaw } from 'vue'
import IButton from '@/components/IButton/IButton.vue'

const emit = defineEmits(['submit'])

const props = defineProps({
  isLoading: {
    default: false,
    type: Boolean,
  },
})

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
    <IIinput label="Пароль" placeholder="**********" type="password" v-model="userData.password" />
    <IButton class="mt-7 w-full" variant="gradient" type="submit" :is-loading="props.isLoading"
      >Увійти
    </IButton>
  </FormContainer>
</template>
