<script setup>
import Card from './components/Card.vue';
</script>

<template>
  <header>teste</header>

  <Card imagem="https://via.placeholder.com/300" titulo="Meu Card"
    descricao="Esta é uma descrição de exemplo para o card." :tags="['fotografia', 'viagem', 'inverno']" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
