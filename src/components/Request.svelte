<script>
  import { currentRequest } from "../stores/requests";
  import createClient from "../util/socket";
  import socket from "../stores/socket";
  import { onMount } from "svelte";

  let initialized = false;
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
    $socket.on("createThing", (data) => console.log(data));
    $socket.on("findAllThings", (data) => console.log(data));
    initialized = true;
  }

  const emitEvent = (name) => {
    name === "createThing"
      ? $socket.emit(name, { blah: 7 })
      : $socket.emit(name);
  };
</script>

<div class="header">
  <h1>request</h1>
  <div class="options">
    <button>connect</button>
    <button on:click={() => requests()}>requests</button>
  </div>
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

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 13px;
    row-gap: 13px;
  }

  .header h1 {
    width: fit-content;
    margin: 0px;
  }
  .request {
    background: white;
  }

  .property {
    padding: 8px;
  }

  .eventButton {
    margin-right: 13px;
    cursor: pointer;
  }
</style>
