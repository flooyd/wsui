import { writable } from "svelte/store";

const requests = writable([]);
export const currentRequest = writable(null);
export const manage = writable(false);

requests.subscribe((value) => value);

export default requests;
