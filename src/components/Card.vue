<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <div class="px-6 py-4">
      <img :src="product.image" :alt="product.title" class="h-32 mx-auto" />
      <div class="font-bold text-xl mb-2 text-xs">{{ product.title }}</div>
      <div>
        <p class="text-gray-700 text-base">{{ formatarMoeda(product.price) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { formatarMoeda } from "../utils/formatarMoeda";

defineProps({
  product: Object
});
</script>
