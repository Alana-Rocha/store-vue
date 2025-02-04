<template>
  <div class="flex items-center space-x-2">
    <button
      @click="decreaseQuantity"
      class="w-5 h-5 flex items-center justify-center bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
    >
      -
    </button>

    <input
      type="number"
      v-model="quantity"
      class="w-9 h-7 text-center bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
      min="0"
      max="999"
      style="
        appearance: none;
        -moz-appearance: textfield;
        -webkit-appearance: none;
      "
    />

    <button
      @click="increaseQuantity"
      class="w-5 h-5 flex items-center justify-center bg-gray-700 text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full"
    >
      +
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
    };
  },
  methods: {
    increaseQuantity() {
      if (this.quantity < 999) {
        this.quantity++;
      }
    },
    decreaseQuantity() {
      if (this.quantity > 0) {
        this.quantity--;
      }
    },
  },
};
</script>
