<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings.js'
import { ref } from 'vue'
import FavouritePlaces from '../../src/components/FavouritePlaces/FavouritePlaces.vue'
import MapIcon from '../../src/components/icons/MapIcon.vue'
import 'mapbox-gl/dist/mapbox-gl.css'

const activeId = ref(null)
const map = ref(null)

const favouritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'Description 1',
    img: '',
    lngLat: [21.064217, 52.2890695],
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'Description 2',
    img: '',
    lngLat: [21.061212, 52.2600695],
  },
]
const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favouritePlaces.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: 14 })
}
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavouritePlaces
        :items="favouritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[21.064217, 52.2360695]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-for="place in favouritePlaces" :key="place.id" :lngLat="place.lngLat">
          <button @click="changeActiveId(place.id)">
            <MapIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
