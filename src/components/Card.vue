<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <div class="px-6 py-4">
      <div class="flex justify-end">
        <InputAmount />
      </div>
      <div class="flex flex-col gap-4">
        <img :src="product.image" :alt="product.title" class="h-32 mx-auto" />
        <h1 class="font-bold text-xl mb-2 text-xs">{{ product.title }}</h1>
      </div>
      <div class="flex justify-between items-center">
        <p class="text-gray-700 text-base">{{ formatarMoeda(product.price) }}</p>
        <Button label="Add Cart" @click="addProductToCart" class="text-xs" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { formatarMoeda } from "../utils/formatarMoeda";
import { useCartStore } from "../stores/CartStore";
import Button from "./Button.vue";
import InputAmount from "./InputAmount.vue";

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

const addProductToCart = () => {
  cartStore.addToCart(props.product);
};
</script>
