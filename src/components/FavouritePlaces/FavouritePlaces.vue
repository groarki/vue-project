<script setup>
import { useModal } from '@/composables/useModal'
import IButton from '../IButton/IButton.vue'
import MarkerComponent from '../MarkerComponent/MarkerComponent.vue'
import EditPlaceModal from '../EditPlaceModal/EditPlaceModal.vue'
import { computed, ref } from 'vue'
import { useMutation } from '@/composables/useMutation'
import { deletePlaces, updateFavouritePlaces } from '@/api/places'
import ConfirmModal from '../ConfirmModal/ConfirmModal.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array,
  },
  activeId: {
    required: true,
    type: [String, null],
  },
  isPlacesLoading: {
    default: false,
    type: Boolean,
  },
})

const emit = defineEmits(['place-clicked', 'create', 'updated'])

const { isOpen: isEditOpen, openModal: openEdit, closeModal: closeEdit } = useModal()
const { isOpen: isConfirmOpen, openModal: openConfirm, closeModal: closeConfirm } = useModal()

const selectedId = ref(null)

const selectedItem = computed(() => props.items.find((place) => place.id === selectedId.value))
const idOfDeletePlace = ref(null)

const handleOpenConfirm = (id) => {
  openConfirm()
  idOfDeletePlace.value = id
}

const handleEditPlace = (id) => {
  selectedId.value = id
  openEdit()
}

const handleSubmit = (formData) => {
  updatePlace(formData)
}

const handleDeletePlace = () => {
  deletePlace(idOfDeletePlace.value)
}

const { mutation: updatePlace, isLoading } = useMutation({
  mutationFn: (formData) => updateFavouritePlaces(formData),
  onSuccess: () => {
    closeEdit()
    emit('updated')
  },
})

const { mutation: deletePlace, isLoading: isDeleting } = useMutation({
  mutationFn: (id) => deletePlaces(id),
  onSuccess: () => {
    closeConfirm()
    idOfDeletePlace.value = null
    emit('updated')
  },
})
</script>

<template>
  <div class="flex flex-col px-6 py-11 w-[379px]">
    <h2 v-if="items.length === 0 && !isPlacesLoading" class="text-primary text-center p">
      Список улюблених місць порожній
    </h2>
    <p v-else class="text-gray mb-[18px]">Додані маркери</p>
    <div v-if="isPlacesLoading" class="flex items-center justify-center">
      <h2 class="text-black text-sm">Loading...</h2>
    </div>
    <div class="flex flex-col gap-6 mb-10">
      <MarkerComponent
        :key="place.id"
        v-for="place in props.items"
        :title="place.title"
        :description="place.description"
        :img="place.img"
        :isActive="place.id === props.activeId"
        @click="emit('place-clicked', place.id)"
        @edit="handleEditPlace(place.id)"
        @delete="handleOpenConfirm(place.id)"
      />
      <EditPlaceModal
        :is-open="isEditOpen"
        @close="closeEdit"
        :place="selectedItem"
        @submit="handleSubmit"
        :is-loading="isLoading"
      />
      <ConfirmModal
        :is-open="isConfirmOpen"
        :is-loading="isDeleting"
        @cancel="closeConfirm"
        @confirm="handleDeletePlace"
      />
    </div>
    <IButton v-if="!isPlacesLoading" variant="gradient" @click="emit('create')">
      Додати маркер
    </IButton>
  </div>
</template>
