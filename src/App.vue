<script setup>
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/Registrationform/RegistrationForm.vue'
import HomePage from './views/HomePage.vue'
</script>

<template>
  <HomePage />
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
</template>
