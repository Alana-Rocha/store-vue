<template>
  <button :class="[
    'flex items-center justify-center p-2 rounded-full transition',
    'hover:bg-gray-200 dark:hover:bg-gray-700',
  ]" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
  },
  color: {
    type: String,
    default: 'gray',
  },
});

</script>