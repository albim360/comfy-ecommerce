<script setup lang="ts">
import { ref } from 'vue'
const cartItems = ref([])

import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Shop from './components/Shop.vue'
</script>

<template>
  <div>
    <Navbar :cartItems="cartItems" />
    <Hero />
    <About />
    <Shop />
  </div>
</template>

<style scoped></style>
