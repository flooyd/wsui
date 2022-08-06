import { writable } from "svelte/store";

const loginOrRegister = writable(null);

loginOrRegister.subscribe((value) => value);

export default loginOrRegister;
