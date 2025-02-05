import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore("cart", () => {
  const cart = ref([]);
  const addToCart = (product) => {
    const item = cart.value.find((i) => i.id === product.id);
    if (item) {
        console.log({item})
      item.quantity += 1;
    } else {
      cart.value.push({ ...product, quantity: 1 });
    }
  };
  return { cart, addToCart };
});
