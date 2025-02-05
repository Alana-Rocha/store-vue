<template>
  <div class="relative">

    <div v-if="cartStore.openDrawer" class="fixed inset-0 bg-black bg-opacity-50" @click="cartStore.openDrawer = false">
    </div>

    <div
      :class="['fixed top-0 right-0 h-full w-70 bg-white shadow-lg transform transition-transform', cartStore.openDrawer ? 'translate-x-0' : 'translate-x-full']">
      <div class="p-4 flex justify-between items-center border-b">
        <h2 class="text-lg font-semibold text-[#42B883]">Meu Carrinho</h2>
        <button @click="cartStore.openDrawer = false" class="text-gray-600">&times;</button>
      </div>

      <ul class="p-4 space-y-2">
        <li v-if="cartStore.cart.length === 0" class="text-center">Seu carrinho está vazio</li>
        <li v-for="product in cartStore.cart" :key="product.id" class="flex justify-between items-center gap-5">
          <p>{{ limitarCaracteres(product.title) }}</p>
          <p>{{ formatarMoeda(product.price) }}</p>
          <img :src="product.image" :alt="product.title" class="h-7 mx-auto" />
          <button @click="removeProductToCart" class="p-2 rounded-full hover:bg-gray-200 transition">
            <img src="/assets/icons/lixeira.svg" class="w-4 h-5" alt="Remover do carrinho" />
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore';
import { limitarCaracteres } from '../utils/limitarCaracteres';
import { formatarMoeda } from '../utils/formatarMoeda'

const props = defineProps({
  product: Object,
});

const cartStore = useCartStore();

const removeProductToCart = (product) => {
  cartStore.removeFromCart(product);
};

</script>
