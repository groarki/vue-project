<script setup lang="ts"></script>

<template>
  <div class="w-[1000px] rounded-4xl flex h-[642px] overflow-hidden shadow-2xl">
    <section class="flex-1 flex items-center justify-center bg-primary">
      <slot>
        <!--форма логін/реєстрація -->
      </slot>
    </section>
    <section class="flex-1 relative">
      <div class="absolute inset-0 bg-black/5"></div>
      <img class="h-full w-full object-cover" src="../assets/img/static-map.png" alt="" />
    </section>
  </div>
</template>
