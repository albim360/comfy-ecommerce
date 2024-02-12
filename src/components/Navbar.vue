<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container"> 
      <div class="brand">
        <a href="/" class="navbar-brand"> 
          <img src="../../public/images/logo.svg" alt="logo" class="logo">
        </a>
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="right-section ms-auto">
          <div class="phone-number">
            <a href="tel:1234567890">123-456-7890</a>
          </div>
          <div class="cart">
            <a href="#" class="cart-link"> 
              <span class="cart-icon"></span>
              <span class="cart-total">{{ cartTotal }}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cartTotal = ref(0);
</script>

<style scoped>
.brand {
  padding-left: 1em;
}

.logo {
  max-height: 4em; 
  padding: 0.85rem;
}

.right-section {
  display: flex;
  align-items: center; 
}

.phone-number,
.cart {
  margin-left: 1em; 
}


</style>
