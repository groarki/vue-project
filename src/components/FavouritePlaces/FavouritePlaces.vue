<script setup>
import IButton from '../IButton/IButton.vue'
import MarkerComponent from '../MarkerComponent/MarkerComponent.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [Number, null],
  },
})

const emit = defineEmits(['place-clicked'])
</script>

<template>
  <div class="flex flex-col px-6 py-11 w-[379px]">
    <p class="text-gray mb-[18px]">Додані маркери</p>
    <div class="flex flex-col gap-6 mb-11">
      <MarkerComponent
        :key="place.id"
        v-for="place in props.items"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :isActive="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
      />
    </div>
    <IButton variant="gradient"> Додати маркер </IButton>
  </div>
</template>
