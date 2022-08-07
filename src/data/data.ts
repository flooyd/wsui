export const data = {
  requests: [
    {
      name: "demo server",
      ws: "wss://floyds-gigs.herokuapp.com/",
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
