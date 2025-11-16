<script setup>
import FavouritePlaces from '@/components/FavouritePlaces/FavouritePlaces.vue'
import IButton from '../components/IButton/IButton.vue'
</script>

<template>
  <main class="bg-white flex justify-center items-center h-screen">
    <div class="w-4xl rounded-4xl flex h-[642px] overflow-hidden shadow-2xl">
      <section class="flex-1 pt-30 pb-5 flex-col flex justify-between items-center bg-primary">
        <div class="flex items-center w-80">
          <div class="text-white text-center">
            <img class="inline mb-6" src="../assets/img/pin.svg" alt="" />
            <h1 class="font-bold text-2xl mb-3">IT traveler</h1>
            <p class="leading-5 mb-6 text-xs">
              Простий і зручний веб додаток, який дозволить тобі відмічати твої улюблені місця, а
              також ті, в яких би ти дуже хотів побувати. Тож не зволікай і спробуй сам.
            </p>
            <IButton></IButton>
          </div>
        </div>

        <div class="inline-flex justify-center items-center gap-2">
          <p class="justify-center text-white/80 text-xs font-normal font-['Inter'] leading-5">
            У вас ще немає аккаунту?
          </p>
          <div class="justify-center text-white/80 text-xs font-normal font-['Inter'] leading-5">
            <span
              class="cursor-pointer text-white text-xs font-normal font-['Inter'] underline leading-5"
              >Зареєструватися</span
            >
            або
            <span
              class="text-white cursor-pointer text-xs font-normal font-['Inter'] underline leading-5"
            >
              увійти</span
            >
          </div>
        </div>
      </section>
      <section class="flex-1 relative">
        <div class="absolute inset-0 bg-black/5"></div>
        <img class="h-full w-full object-cover" src="../assets/img/static-map.png" alt="" />
      </section>
    </div>
  </main>
  <FavouritePlaces />
</template>
