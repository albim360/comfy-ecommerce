<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <div class="brand">
        <a href="/" class="navbar-brand">
          <img src="../../public/images/logo.svg" alt="logo" class="logo" />
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
            <a href="#" class="cart-link" @click="toggleCart">
              <span class="cart-icon"
                ><i class="fa-solid fa-cart-shopping"></i
              ></span>
              <span class="cart-total"
                >{{ cartItemCount }} Items - ${{ cartTotal }}</span
              >
            </a>
            <div v-if="isCartOpen" class="cart-detail">
              <div class="cart-detail-header">
                <h2>Cart</h2>
                <button @click="toggleCart">X</button>
              </div>
              <div class="cart-items">
                <div
                  v-for="(item, index) in groupedCartItems"
                  :key="index"
                  class="cart-item"
                >
                  <p>{{ item.product.fields.title }} x {{ item.quantity }}</p>
                  <p>${{ formatPrice(item.product.fields.price * item.quantity) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";

interface ProductWithQuantity {
  product: Product;
  quantity: number;
}

export default defineComponent({
  setup() {
    const store = useStore();
    const isCartOpen = ref(false);

    const cartItems = computed(() => store.state.cartItems);
    const groupedCartItems = computed(() => groupCartItems(cartItems.value));
    const cartItemCount = computed(() => cartItems.value.length);
    const cartTotal = computed(() =>
      cartItems.value
        .reduce((total, item) => total + item.fields.price, 0)
        .toFixed(2)
    );

    function toggleCart() {
      isCartOpen.value = !isCartOpen.value;
    }

    function formatPrice(price: number) {
      return price.toFixed(2);
    }

    function groupCartItems(cartItems: Product[]): ProductWithQuantity[] {
      const groupedItems: ProductWithQuantity[] = [];
      cartItems.forEach((item) => {
        const existingItem = groupedItems.find((groupedItem) => groupedItem.product.sys.id === item.sys.id);
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          groupedItems.push({ product: item, quantity: 1 });
        }
      });
      return groupedItems;
    }

    return {
      groupedCartItems,
      cartItemCount,
      cartTotal,
      toggleCart,
      formatPrice,
      isCartOpen,
    };
  },
});
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

.cart-detail {
}
</style>
