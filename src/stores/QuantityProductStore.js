import { defineStore } from 'pinia';

export const useQuantityProductStore = defineStore('quantityProduct',{
    state: () => ({quantity: 0}),

    actions: {
        increaseQuantity() {
            if(this.quantity < 50) {
                this.quantity++
            }
        },
        decreaseQuantity() {
            if(this.quantity > 0) {
                this.quantity--
            }
        },
    },
})