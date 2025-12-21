<script setup>
import { MapboxMap, MapboxMarker } from '@studiometa/vue-mapbox-gl'
import { mapSettings } from '../map/settings.js'
import { computed, onMounted, ref } from 'vue'
import FavouritePlaces from '../../src/components/FavouritePlaces/FavouritePlaces.vue'
import MapIcon from '../../src/components/icons/MapIcon.vue'
import 'mapbox-gl/dist/mapbox-gl.css'
import { addFavouritePlaces, getFavouritePlaces } from '@/api/places/index.js'
import { useModal } from '@/composables/useModal.js'
import CreatePlace from '@/components/IModal/CreatePlace.vue'
import { useMutation } from '@/composables/useMutation.js'

const activeId = ref(null)
const map = ref(null)
const mapMarker = ref(null)
const { isOpen, openModal, closeModal } = useModal()

const favouritePlaces = computed(() => data.value ?? [])

const changeActiveId = (id) => {
  activeId.value = id
}

const {
  mutation: addPlace,
  isLoading,
  error,
} = useMutation({
  mutationFn: (newPlaceData) => addFavouritePlaces(newPlaceData),
  onSuccess: () => {
    closeModal()
    mapMarker.value = null
    getPlaces()
  },
})

const handleAddPlace = async (formData, resetForm) => {
  const body = {
    ...formData,
    coordinates: mapMarker.value,
  }
  await addPlace(body)

  resetForm()
}

const { data, mutation: getPlaces } = useMutation({
  mutationFn: () => getFavouritePlaces(),
})
const changePlace = (id) => {
  const { coordinates } = favouritePlaces.value.find((place) => place.id === id)
  console.log('coord', coordinates)
  console.log('id', id)
  changeActiveId(id)

  map.value.flyTo({ center: coordinates, zoom: 14 })
}

const handleMapClick = ({ lngLat }) => {
  mapMarker.value = [lngLat.lng, lngLat.lat]
}

onMounted(() => {
  getPlaces()
})
</script>

<template>
  <main class="flex h-screen flex-1">
    <div class="bg-white h-full overflow">
      <FavouritePlaces
        :items="favouritePlaces"
        :active-id="activeId"
        @place-clicked="changePlace"
        @create="openModal"
        @updated="getPlaces"
      />
      <CreatePlace
        :is-open="isOpen"
        @close="closeModal"
        @submit="handleAddPlace"
        :has-error="error"
        :is-loading="isLoading"
      />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[21.064217, 52.2360695]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
        @mb-click="handleMapClick"
        @mb-created="(mapInstance) => (map = mapInstance)"
      >
        <MapboxMarker v-if="mapMarker" :lngLat="mapMarker" anchor="bottom">
          <MapIcon class="h-8 w-8" />
        </MapboxMarker>
        <MapboxMarker v-for="place in favouritePlaces" :key="place.id" :lngLat="place.coordinates">
          <button @click.stop="changeActiveId(place.id)">
            <MapIcon class="w-8 h-8" />
          </button>
        </MapboxMarker>
      </MapboxMap>
    </div>
  </main>
</template>
