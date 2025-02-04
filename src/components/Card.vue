<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <div v-for="products in products" :key="products.id">
      <div class="px-6 py-4">
        <img :src="products.image" alt="product.title" class="h-32 mx-auto" />
        <div class="font-bold text-xl mb-2 text-xs">{{ products.title }}</div>
        <div>
          <p class="text-gray-700 text-base">{{ formatarMoeda(products.price) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getProducts } from "../services/api"
import {formatarMoeda} from '../utils/formatarMoeda'

const products = ref([]);

console.log({ products });

onMounted(async () => {
  products.value = await getProducts();
});

</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}
</style>