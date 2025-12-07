<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <form class="flex flex-col bg-white rounded-2xl items-center p-10 w-[400px]">
    <div class="inline-flex gap-11 text-xs mb-7">
      <router-link
        class="text-[#2b2b2b]/20 font-bold"
        to="registration"
        exact-active-class="text-primary"
      >
        Створити аккаунт
      </router-link>
      <router-link class="text-[#2b2b2b]/20 font-bold" to="login" exact-active-class="text-primary">
        Увійти
      </router-link>
    </div>
    <slot></slot>
  </form>
</template>
