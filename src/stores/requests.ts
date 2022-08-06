import { writable } from "svelte/store";

const requests = writable([]);
export const currentRequest = writable(null);

requests.subscribe((value) => value);

export default requests;
