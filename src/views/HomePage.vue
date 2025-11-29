<script setup>
import LoginForm from '@/components/Auth/LoginForm/LoginForm.vue'
// import RegistrationForm from '@/components/Auth/RegistrationForm/RegistrationForm.vue'
// import GreetingComponent from '@/components/GreetingComponent/GreetingComponent.vue'
import RouteComponent from '@/components/RouteComponent/RouteComponent.vue'
</script>

<template>
  <main class="bg-white flex justify-center items-center h-screen">
    <RouteComponent>
      <!-- <GreetingComponent /> -->
      <!-- <RegistrationForm @submit="console.log" /> -->
      <LoginForm @submit="console.log" />
    </RouteComponent>
  </main>
</template>
