<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container"> 
      <div class="brand">
        <a href="/" class="navbar-brand"> 
          <img src="../../public/images/logo.svg" alt="logo" class="logo">
        </a>
      </div>
      <div class="right-section">
        <div class="phone-number">
          <a href="tel:1234567890">123-456-7890</a>
        </div>
        <div class="cart">
          <a href="/cart" class="cart-link"> 
            <span class="cart-icon"></span>
            <span class="cart-total"></span>
          </a>
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
@import '../../node_modules/normalize.css/normalize.css';
@import '../style.css';


.brand {
  padding-left: 1em;
}

.logo {
  max-height: 4em; 
  padding: 1.5em;
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
