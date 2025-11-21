<script setup>
import IButton from '@/components/IButton/IButton.vue'
</script>

<template>
  <div class="relative flex items-center px-12">
    <div class="flex items-center justify-center w-full">
      <div class="text-white text-center">
        <img class="inline mb-6" width="50" height="50" src="../../assets/img/pin.svg" alt="" />
        <h1 class="font-bold text-2xl mb-3">IT traveler</h1>
        <p class="leading-4 mb-6 text-xs tracking-tighter">
          Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а також
          ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
        </p>
        <IButton></IButton>
      </div>
    </div>
    <div class="inline-flex gap-2 absolute top-95 left-20">
      <p class="justify-center text-white/80 text-xs font-normal leading-5">
        У вас ще немає аккаунту?
      </p>
      <div class="justify-center text-white/80 text-xs font-normal leading-5">
        <span class="cursor-pointer text-white text-xs font-normal underline leading-5"
          >Зареєструватися</span
        >
        або
        <span class="text-white cursor-pointer text-xs font-normal underline leading-5">
          увійти</span
        >
      </div>
    </div>
  </div>
</template>
