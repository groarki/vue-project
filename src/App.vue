<script setup>
import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
import CreatePlace from './components/IModal/CreatePlace.vue'
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
  <CreatePlace :is-open="isOpen" @close="closeModal" @submit="console.log" />
  <HomePage />
  <FavouritePlaces />
</template>
