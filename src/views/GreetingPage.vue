<script setup>
import GreetingComponent from '@/components/GreetingComponent/GreetingComponent.vue'
import RouteComponent from '@/layout/RouteComponent.vue'
</script>

<template>
  <div class="bg-white flex justify-center items-center h-screen">
    <RouteComponent>
      <GreetingComponent />
    </RouteComponent>
  </div>
</template>
