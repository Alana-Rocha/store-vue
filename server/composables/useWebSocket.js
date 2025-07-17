import { ref, onMounted, onUnmounted } from 'vue'

export function useWebSocket() {
  const messages = ref([])
  let socket = null

  const connect = () => {
    socket = new WebSocket('ws://localhost:3001')

    socket.onopen = () => {
      console.log('[WebSocket] Conectado ao servidor')
    }

    socket.onmessage = (event) => {
      const msg = JSON.parse(event.data)
      console.log('[WebSocket] Mensagem recebida:', msg)

      if (msg.type === 'new_product') {
        messages.value = [msg.data]
      }
    }

    socket.onerror = (err) => {
      console.error('[WebSocket] Erro:', err)
    }

    socket.onclose = () => {
      console.warn('[WebSocket] Conexão encerrada')
    }
  }

  onMounted(connect)
  onUnmounted(() => {
    if (socket) socket.close()
  })

  return {
    messages
  }
}
