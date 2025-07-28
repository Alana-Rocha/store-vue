const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 3001 }, () => {
  console.log("WebSocket server rodando em ws://localhost:3001");
});

setInterval(() => {
  const message = {
    type: "new_product",
    data: {
      name: "Produto " + Math.floor(Math.random() * 100),
      price: (Math.random() * 100).toFixed(2),
    },
  };

  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}, 15000);
