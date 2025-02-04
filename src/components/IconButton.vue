<template>
    <button
      :class="[
        'flex items-center justify-center p-2 rounded-full transition',
        'hover:bg-gray-200 dark:hover:bg-gray-700',
        sizeClasses,
        colorClasses
      ]"
      @click="$emit('click')"
    >
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
  
  const sizeClasses = computed(() => {
    return {
      sm: 'w-8 h-8 text-sm',
      md: 'w-10 h-10 text-base',
      lg: 'w-12 h-12 text-lg',
    }[props.size];
  });
  
  const colorClasses = computed(() => {
    return {
      gray: 'text-gray-600 dark:text-gray-300',
      primary: 'text-blue-600 dark:text-blue-400',
      danger: 'text-red-600 dark:text-red-400',
    }[props.color];
  });
  </script>
  