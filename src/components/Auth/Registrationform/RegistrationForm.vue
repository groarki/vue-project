<script setup>
import CommonButton from '@/components/CommonButton/CommonButton.vue'
import IIinput from '@/components/IInput/IIinput.vue'
</script>

<template>
  <form class="flex flex-col p-10 w-[499px] [&>*:not(:nth-child(3))]:mb-4">
    <IIinput label="Повне ім'я" placeholder="Ратушняк Ілона" type="text" />
    <IIinput label="E-mail" placeholder="email@gmail.com" type="email" />
    <IIinput label="Пароль" placeholder="********" type="password" />
    <CommonButton class="mt-10">Створити акаунт</CommonButton>
  </form>
</template>
