import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const openDrawer = ref(false);

  const addToCart = (product) => {
    const inCart = cart.value.some((i) => i.id === product.id);
    if (!inCart) {
      cart.value.push(product);
    }
  };

  const removeFromCart = (product) => {
    const index = cart.value.findIndex((i) => i.id === product.id);
    cart.value.splice(index, 1);
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    openDrawer,
  };
});
