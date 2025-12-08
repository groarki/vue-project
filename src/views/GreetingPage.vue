<script setup>
import GreetingComponent from '@/components/GreetingComponent/GreetingComponent.vue'
import RouteComponent from '@/layout/RouteComponent.vue'
</script>

<template>
  <div class="flex justify-center items-center">
    <RouteComponent>
      <GreetingComponent />
    </RouteComponent>
  </div>
</template>
