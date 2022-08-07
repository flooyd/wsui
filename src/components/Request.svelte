<script>
  import { currentRequest } from "../stores/requests";
  import createClient from "../util/socket";
  import socket from "../stores/socket";
  import { onMount } from "svelte";
  import { JsonView } from "@zerodevx/svelte-json-view";

  let initialized = false;
  let response = null;
  let date = null;

  const requests = () => {
    $currentRequest = null;
    $socket = null;
  };

  const connect = () => {
    $socket = createClient($currentRequest.ws);
    console.log($socket);
  };

  onMount(() => {
    connect();
  });

  $: if ($socket && !initialized) {
    console.log("xd");
    $socket.on("connect", () => console.log("connected"));
    $socket.on("createThing", (data) => (response = data));
    $socket.on("findAllThings", (data) => (response = data));
    $socket.on("deleteThings", (data) => (response = data));
    initialized = true;
  }

  const emitEvent = (name) => {
    name === "createThing" ? $socket.emit(name, { blah: 7, xd: 5 }) : null;
    name === "deleteThings" ? $socket.emit(name, { number: 77 }) : null;
    name === "findAllThings" ? $socket.emit(name) : null;
    date = new Date(Date.now());
  };
</script>

<div class="header">
  <h1>request</h1>
</div>
<div class="request">
  <div class="property">
    <span class="bold">name: </span>
    {$currentRequest.name}
  </div>
  <div class="property">
    <span class="bold">ws: </span>
    {$currentRequest.ws}
  </div>
  <div class="property">
    <span class="bold">options: </span>
    <button>connect</button>
    <button on:click={() => requests()}>requests</button>
  </div>
  <div class="property">
    <span class="bold">listeners: </span>
    {#each $currentRequest.listeners as listener}
      <button class="eventButton">{listener.name}</button>
    {/each}
  </div>
  <div class="property">
    <span class="bold">events: </span>
    {#each $currentRequest.events as event}
      <button class="eventButton" on:click={() => emitEvent(event.name)}
        >{event.name}</button
      >
    {/each}
  </div>
</div>
<div class="header">
  <h1>response</h1>
</div>
<div class="response">
  {#if response}
    <JsonView json={response} />
  {:else}
    <JsonView json={{ message: "click an event" }} />
  {/if}
</div>

<style>
  .header {
    margin-bottom: 20px;
  }

  .header h1 {
    width: fit-content;
  }

  .request,
  .response {
    background: white;
    margin-bottom: 20px;
    border: 3px solid #333;
  }

  .response {
    padding: 8px;
  }

  .property {
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .eventButton {
    cursor: pointer;
  }

  .property span {
    width: 80px;
    display: inline-block;
  }

  .property:hover {
    background: lightblue;
  }
</style>
