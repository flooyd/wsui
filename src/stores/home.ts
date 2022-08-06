import { writable } from "svelte/store";

const showHome = writable(true);

showHome.subscribe((value) => value);

export default showHome;
