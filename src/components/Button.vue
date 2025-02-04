<template>
    <button 
        :class="'bg-[#42B883] hover:bg-[#3d9970] text-white font-bold py-2 px-4 rounded-full transition-colors duration-200 ease-in-out'"
        @click="$emit('click')"
    >
        {{ label }}
    </button>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    }
});
</script>