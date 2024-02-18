<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container">
      <div class="brand">
        <a href="/" class="navbar-brand">
          <img src="../../public/images/logo.svg" alt="logo" class="logo" />
        </a>
      </div>
      <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarSupportedContent">
        <div class="right-section ms-auto">
          <div class="phone-number me-5">
            <a href="tel:1234567890">123-456-7890</a>
          </div>
          <div class="cart border-black p-1">
            <a href="#" class="cart-link" @click="toggleCart">
              <span class="cart-icon">
                <i class="fa-solid fa-cart-shopping"></i>
              </span>
              <span class="cart-total">
                {{ cartItemCount }} Items - ${{ cartTotal }}
              </span>
            </a>
            <div v-if="isCartOpen" class="cart-detail open overflow-y-auto">
              <div class="cart-items">
                <div v-for="(item, index) in groupedCartItems" :key="index" class="cart-item">
                  <img :src="item.product.fields.image.fields.file.url" alt="Product Image" class="product-image">
                  <div class="item-details">
                    <p class="upper-case">{{ item.product.fields.title }}</p>
                    <p>{{ item.quantity }} x ${{ formatPrice(item.product.fields.price) }}</p>
                  </div>
                  <p class="item-total">${{ formatPrice(item.product.fields.price * item.quantity) }}</p>
                  <i class="fa-solid fa-trash-can delete-icon" @click="removeItem(item.product.sys.id)"></i>
                </div>
              </div>
              <div class="cart-summary">
                <p>Total Items: {{ cartItemCount }}</p>
                <p>Total Price: ${{ cartTotal }}</p>
              </div>
              <div class="cart-buttons">
                <button class="clear-items-btn" @click="clearCart">Clear Items</button>
                <button class="checkout-btn">Checkout</button>
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
    const isNavbarOpen = ref(false);
    const cartItems = computed(() => store.state.cartItems);
    const groupedCartItems = computed(() => groupCartItems(cartItems.value));
    const cartItemCount = computed(() => cartItems.value.length);
    const cartTotal = computed(() =>
      cartItems.value
        .reduce((total, item) => total + item.fields.price, 0)
        .toFixed(2)
    );

    const removeItem = (productId) => {
      store.dispatch('removeFromCart', productId)
    };

    function toggleCart() {
      isCartOpen.value = !isCartOpen.value;
    }

    function toggleNavbar() {
      isNavbarOpen.value = !isNavbarOpen.value;
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

    function clearCart() {
      store.dispatch('clearCart');
    }

    return {
      groupedCartItems,
      cartItemCount,
      cartTotal,
      toggleCart,
      formatPrice,
      isCartOpen,
      clearCart,
      removeItem,
      toggleNavbar,
      isNavbarOpen
    };
  },
});
</script>

<style scoped>


</style>
