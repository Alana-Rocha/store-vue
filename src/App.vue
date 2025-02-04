<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "./services/api";
import Card from "./components/Card.vue";

const products = ref([]);

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
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <!-- <IconButton size="lg"> -->
          <img src="/assets/icons/cart.svg" class="w-12 h-13" alt="Carrinho" />
          <!-- </IconButton> -->
        </div>
      </nav>
    </header>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mx-auto max-w-6xl px-4">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
