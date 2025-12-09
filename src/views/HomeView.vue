<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings.js'
import { onMounted, ref } from 'vue'
import FavouritePlaces from '../../src/components/FavouritePlaces/FavouritePlaces.vue'
import MapIcon from '../../src/components/icons/MapIcon.vue'
import 'mapbox-gl/dist/mapbox-gl.css'
import { getFavouritePlaces } from '@/api/places/index.js'

const activeId = ref(null)
const map = ref(null)

const favouritePlaces = ref([])

const changeActiveId = (id) => {
  activeId.value = id
}

const changePlace = (id) => {
  const { lngLat } = favouritePlaces.value.find((place) => place.id === id)
  changeActiveId(id)
  map.value.flyTo({ center: lngLat, zoom: 14 })
}

onMounted(async () => {
  const { data } = await getFavouritePlaces()
  favouritePlaces.value = data
})
</script>

<template>
  <main class="flex h-screen flex-1">
    <div class="bg-white h-full w-full shrink-3 overflow-auto">
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
