import { writable } from "svelte/store";

const socket = writable(null);

socket.subscribe((value) => value);

export default socket;
