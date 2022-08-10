import { writable } from "svelte/store";

const showHome = writable(false);

showHome.subscribe((value) => value);

export default showHome;
