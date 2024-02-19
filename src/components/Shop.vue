<template>
  <div class="shop">
    <div class="container">
      <h2 class="text-center mb-4">
        Our <span class="orange-bold">Store</span>
      </h2>

      <div
        class="text-center mb-4 d-flex flex-column flex-sm-row justify-content-around flex-wrap"
      >
        <button class="my-1 my-sm-0 mx-2" @click="filterProducts('all')">
          ALL
        </button>
        <button class="my-1 my-sm-0 mx-2" @click="filterProducts('bed')">
          BEDS
        </button>
        <button class="my-1 my-sm-0 mx-2" @click="filterProducts('fridge')">
          FRIDGES
        </button>
        <button class="my-1 my-sm-0 mx-2" @click="filterProducts('table')">
          TABLE
        </button>
      </div>

      <div class="text-center mb-4">
        <input
          type="text"
          v-model="searchTerm"
          placeholder="Search Products"
          class="form-control"
          @input="searchProducts"
        />
      </div>

      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="product in filteredProducts"
          :key="product.sys.id"
        >
          <div class="card">
            <div class="card-img-container">
              <img
                :src="getImageUrl(product)"
                class="card-img-top"
                alt="Product Image"
              />
              <i
                class="fa-solid fa-cart-plus cart-add-icon"
                @click="addToCart(product)"
              ></i>
            </div>
            <div class="card-body">
              <h5 class="card-title upper-case">{{ product.fields.title }}</h5>
              <p class="card-text fw-bold">
                {{ formatPrice(product.fields.price) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, Ref } from "vue";
import { useStore } from "vuex";
import productsData from "../assets/products.json";

interface Product {
  sys: { id: string };
  fields: {
    title: string;
    price: number;
    image: { fields: { file: { url: string } } };
  };
}

const store = useStore();
const searchTerm: Ref<string> = ref("");
const categoryFilter: Ref<string> = ref("all");
const products: Ref<Product[]> = ref(productsData.items);

const addToCart = (product: Product): void => {
  store.dispatch("addToCart", product).then((addedProduct: Product) => {
    console.log("Prodotto aggiunto:", addedProduct);
    alert("Prodotto aggiunto correttamente al carrello!");
  });
};

const filterProducts = (category: string): void => {
  categoryFilter.value = category;
};

const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const productTitle: string = product.fields.title;
    return (
      (categoryFilter.value === "all" ||
        productTitle.includes(categoryFilter.value)) &&
      productTitle.includes(searchTerm.value)
    );
  });
});

const searchProducts = (): void => {
  console.log("Searching for:", searchTerm.value);
};

const getImageUrl = (product: Product): string => {
  return `/${product.fields.image.fields.file.url}`;
};

const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
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
