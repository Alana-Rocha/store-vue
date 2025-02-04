<template>
    <button :class="computedClass" @click="$emit('click')">
        {{ label }}
    </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
    label: {
        type: String,
        default: 'Button'
    },
    primary: {
    type: Boolean,
    default: true
}
  });

const computedClass = computed(() => {
    return props.primary
        ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'
        : 'bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full';
});
</script>