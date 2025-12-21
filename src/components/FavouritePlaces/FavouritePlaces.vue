<script setup>
import { useModal } from '@/composables/useModal'
import IButton from '../IButton/IButton.vue'
import MarkerComponent from '../MarkerComponent/MarkerComponent.vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import { computed, ref } from 'vue'
import { useMutation } from '@/composables/useMutation'
import { updateFavouritePlaces } from '@/api/places'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
})

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen, openModal, closeModal } = useModal()

const selectedId = ref(null)

const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))
const handleEditPlace = (id) => {
  selectedId.value = id
  openModal()
}

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData) => updateFavouritePlaces(formData),
  onSuccess: () => {
    closeModal()
    emit('updated')
  },
})
const handleSubmit = (formData) => {
  updatePlace(formData)
}
</script>

<template>
  <div class="flex flex-col px-6 py-11 w-[379px]">
    <h2 v-if="items.length === 0" class="text-primary text-center p">
      Список улюблених місць порожній
    </h2>
    <p v-else class="text-gray mb-[18px]">Додані маркери</p>
    <div class="flex flex-col gap-6 mb-11">
      <MarkerComponent
        :key="place.id"
        v-for="place in props.items"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :isActive="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
        @edit="handleEditPlace(place.id)"
      />
      <EditPlaceModal
        :is-open="isOpen"
        @close="closeModal"
        :place="selectedItem"
        @submit="handleSubmit"
        :is-loading="isLoading"
      />
    </div>
    <IButton variant="gradient" @click="emit('create')"> Додати маркер </IButton>
  </div>
</template>
