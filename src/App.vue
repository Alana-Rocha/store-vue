<script setup>
import Card from './components/Card.vue';
</script>

<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <p class="text-2xl font-bold text-[#42B883]">
          ShopperVue
        </p>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-base font-semibold text-gray-900">
          Início
        </a>
        <a href="#" class="text-base font-semibold text-gray-900">Produtos</a>
        <a href="#" class="text-base font-semibold text-gray-900">Contato</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
      </div>
    </nav>
  </header>

  <div class="flex flex-col gap-5 ">
    <div class="flex gap-5 items-center justify-center">
      <Card />
      <Card />
      <Card />
    </div>
    <div class="flex gap-5 items-center justify-center">
      <Card />
      <Card />
      <Card />
    </div>
  </div>
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
