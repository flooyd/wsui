import ioClient from "socket.io-client";

export default function createClient(ENDPOINT) {
  const client = ioClient(ENDPOINT);
  client.connect();

  return client;
}
