import ioClient from "socket.io-client";

export default function createClient(ENDPOINT) {
  console.log(ENDPOINT);
  const client = ioClient(ENDPOINT);
  console.log(client);
  client.connect();

  return client;
}
