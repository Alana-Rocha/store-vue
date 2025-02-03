<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <img class="w-full" :src="imagem" :alt="titulo" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ titulo }}</div>
      <p class="text-gray-700 text-base">{{ descricao }}</p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <span v-for="tag in tags" :key="tag"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
        {{ tag }}</span>
    </div>
  </div>
</template>

<script setup>

defineProps({
  imagem: String,
  titulo: String,
  descricao: String,
  tags: Array
});

</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}
</style>