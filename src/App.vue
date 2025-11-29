<script setup>
import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
import IModal from './components/IModal/IModal.vue'
import HomePage from './views/HomePage.vue'
import { ref } from 'vue'

const isOpen = ref(false)

const openModal = () => {
  isOpen.value = true
}

const closeModal = () => {
  isOpen.value = false
}
</script>

<template>
  <button @click="openModal">Open modal</button>
  <IModal v-if="isOpen" @close="closeModal" />
  <HomePage />
  <FavouritePlaces />
</template>
