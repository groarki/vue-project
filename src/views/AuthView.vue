<script setup lang="ts">
import RouteComponent from '@/layout/RouteComponent.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div>
    <RouteComponent>
      <router-view></router-view>
    </RouteComponent>
  </div>
</template>
