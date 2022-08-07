export const data = {
  requests: [
    {
      name: "demo server",
      ws: "ws://localhost:3000",
      events: [
        { name: "findAllThings" },
        { name: "createThing" },
        { name: "deleteThings" },
      ],
      listeners: [
        { name: "findAllThings" },
        { name: "createThing" },
        { name: "deleteThings" },
      ],
    },
    {
      name: "my official server",
      ws: "ws://localhost:3000/officialserver",
      events: [],
      listeners: [],
    },
  ],
};
