<script setup lang="ts">
import DeleteButton from './DeleteButton.vue'
import EditButton from './EditButton.vue'
import placeImage from '../../assets/img/photo.png'

const props = defineProps({
  title: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  img: String,
  isActive: {
    required: true,
    type: Boolean,
  },
})

const emit = defineEmits(['edit', 'delete'])
</script>

<template>
  <div>
    <div class="w-[331px] flex flex-row gap-3.5">
      <img class="size-20 rounded-sm shrink-0 object-cover" :src="props.img || placeImage" />
      <div class="flex flex-col gap-2 w-full">
        <div class="flex flex-row justify-between items-center">
          <p class="text-sm text-black font-medium font-['Inter'] leading-5">{{ props.title }}</p>
          <div class="flex flex-row gap-2">
            <EditButton @click="emit('edit')" />
            <DeleteButton @click="emit('delete')" />
          </div>
        </div>
        <p
          class="w-60 justify-center text-[#2c2c2c]/50 text-xs font-normal font-['Inter'] leading-4 line-clamp-3"
        >
          {{ props.description }}
        </p>
      </div>
    </div>
    <div
      class="w-80 h-0.5 bg-[#2b2b2b]/10 mt-5"
      :class="{ 'bg-primary': props.isActive, 'bg-#2b2b2b/10': !props.isActive }"
    ></div>
  </div>
</template>
