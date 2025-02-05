<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "./services/api";
import { useCartStore } from "./stores/CartStore";
import Card from "./components/Card.vue";

const products = ref([]);
const cartStore = useCartStore();

onMounted(async () => {
  products.value = await getProducts();
});
</script>

<template>
  <div>
    <header>
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex lg:flex-1">
          <p class="text-2xl font-bold text-[#42B883]">
            ShopperVue
          </p>
        </div>
        <div class="relative"> 
          <img src="/assets/icons/cart.svg" class="w-12 h-13" alt="Carrinho" />
          <span v-if="cartStore.cart.length > 0"
            class="absolute -top-0 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {{ cartStore.cart.length }}
          </span>
        </div>
      </nav>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mx-auto max-w-6xl px-4">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
