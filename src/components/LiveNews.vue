<template>
  <div class="fixed bottom-4 right-4 z-50 w-80">
    <section class="bg-white border border-green-300 rounded-lg p-4 shadow-lg">
      <h2
        class="text-sm font-semibold text-green-800 mb-2 flex items-center gap-2"
      >
        <span class="w- h-3 rounded-full bg-green-500 inline-block"></span>
        Novidades!
      </h2>

      <div v-if="messages.length > 0">
        <p
          v-for="(msg, index) in messages"
          :key="index"
          class="bg-green-100 text-green-800 text-sm p-2 rounded-md mb-1"
          :data-testid="`product-message-${index}`"
        >
          <span class="bg-gray-200 text-xs px-2 py-0.5 rounded mr-1">NEW</span>
          Produto: {{ msg.name }} — R$ {{ msg.price }}
        </p>
      </div>
      <div v-else class="text-xs text-gray-400">Aguardando produtos...</div>
    </section>
  </div>
</template>

<script setup>
import { useWebSocket } from "../../server/composables/useWebSocket";

const { messages } = useWebSocket();
</script>
