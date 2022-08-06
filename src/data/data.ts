export const data = {
  requests: [
    {
      name: "demo server",
      ws: "wss://localhost:3000/demo",
      events: [{ name: "sendMessage", data: "hello world" }],
      listeners: [{ name: "receiveMessage" }],
    },
    {
      name: "my official server",
      ws: "ws://localhost:3000/officialserver",
    },
  ],
};
