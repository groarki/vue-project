<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

defineProps({
  isOpen: {
    default: false,
    type: Boolean,
  },
  isLoading: {
    default: false,
    type: Boolean,
  },
})
const emit = defineEmits(['cancel', 'confirm'])
</script>

<template>
  <IModal v-if="isOpen" @close="emit('cancel')">
    <h2 class="text-md mb-4 text-center">Видалити це місце?</h2>
    <div class="flex gap-4 justify-center">
      <IButton
        @click="emit('cancel')"
        class="bg-transparent border-primary border"
        variant="border"
      >
        Відхилити
      </IButton>
      <IButton @click="emit('confirm')" variant="gradient" :is-loading="isLoading">
        Підтвердити
      </IButton>
    </div>
  </IModal>
</template>
