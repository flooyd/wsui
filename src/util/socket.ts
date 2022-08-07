import ioClient from "socket.io-client";

export default function createClient(ENDPOINT) {
  ENDPOINT;
  const client = ioClient(ENDPOINT);
  client;
  client.connect();

  return client;
}
