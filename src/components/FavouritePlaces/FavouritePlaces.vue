<script setup>
import CommonButton from '../CommonButton/CommonButton.vue'
import MarkerComponent from '../MarkerComponent/MarkerComponent.vue'
</script>

<template>
  <div class="flex flex-col px-6 py-11 w-[379px]">
    <p class="text-gray mb-[18px]">Додані маркери</p>
    <div class="flex flex-col gap-6 mb-11">
      <MarkerComponent :key="m" v-for="m in 4" />
    </div>
    <CommonButton> Додати маркер </CommonButton>
  </div>
</template>
