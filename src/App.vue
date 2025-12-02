<script setup>
import FavouritePlaces from './components/FavouritePlaces/FavouritePlaces.vue'
// import CreatePlace from './components/IModal/CreatePlace.vue'
// import HomePage from './views/HomePage.vue'
// import { ref } from 'vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../src/map/settings.js'
import 'mapbox-gl/dist/mapbox-gl.css'

// const isOpen = ref(false)

// const openModal = () => {
//   isOpen.value = true
// }

// const closeModal = () => {
//   isOpen.value = false
// }
</script>

<template>
  <!-- <button @click="openModal">Open modal</button> -->
  <!-- <CreatePlace :is-open="isOpen" @close="closeModal" @submit="console.log" /> -->
  <!-- <HomePage /> -->
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[21.064217, 52.2360695]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      ></MapboxMap>
    </div>
  </main>
</template>
