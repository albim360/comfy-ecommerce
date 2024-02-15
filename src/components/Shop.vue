<template>
  <div class="shop">
    <div class="container">
      <h2 class="text-center mb-4">Our Store</h2>
      <div class="text-center mb-4">
        <button class="mx-3" @click="filterProducts('all')">ALL</button>
        <button class="mx-3" @click="filterProducts('bed')">BEDS</button>
        <button class="mx-3" @click="filterProducts('fridge')">FRIDGES</button>
        <button class="mx-3" @click="filterProducts('other')">OTHER</button>
      </div>
      <div class="text-center mb-4">
        <input type="text" v-model="searchTerm" placeholder="Search Products" class="form-control" @input="searchProducts" />
      </div>
      <div class="row">
        <div class="col-md-4 mb-4" v-for="product in filteredProducts" :key="product.sys.id">
          <div class="card">
            <div class="card-img-container">
              <img :src="getImageUrl(product)" class="card-img-top" alt="Product Image" />
              <i class="fa-solid fa-cart-plus cart-add-icon" @click="addToCart(product)"></i>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ product.fields.title }}</h5>
              <p class="card-text">{{ formatPrice(product.fields.price) }}</p>
              <button @click="addToCart(product)">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import productsData from "../assets/products.json";

const store = useStore();
const searchTerm = ref("");
const categoryFilter = ref("all");
const products = ref(productsData.items);

const addToCart = (product) => {
  store.dispatch('addToCart', product).then((addedProduct) => {
    console.log('Prodotto aggiunto:', addedProduct);
  });
};

const filterProducts = (category) => {
  categoryFilter.value = category;
};

const filteredProducts = computed(() => {
  return products.value.filter(product => {
    return (categoryFilter.value === 'all' || product.fields.title.toLowerCase().includes(categoryFilter.value)) &&
           product.fields.title.toLowerCase().includes(searchTerm.value.toLowerCase());
  });
});

const getImageUrl = (product) => {
  return `/${product.fields.image.fields.file.url}`;
};

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(price);
};
</script>

<style scoped>
.shop {
  background: #eeeeee;
  padding: 4%;
  margin-top: 4%;
}

.card-img-container {
  position: relative;
}

.cart-add-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
}
</style>
