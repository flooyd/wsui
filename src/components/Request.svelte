<script>
  import { currentRequest } from "../stores/requests";
  import createClient from "../util/socket";
  import socket from "../stores/socket";
  import { onDestroy, onMount } from "svelte";
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

  onDestroy(() => {
    $socket = null;
  });

  $: if ($socket && !initialized) {
    console.log("xd");
    $socket.on("connect", () => (response = { message: "connected 😎" }));
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

<div class="container">
  <h1>request</h1>
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
      <button class="nocursor">connect</button>
      <button on:click={() => requests()}>requests</button>
    </div>
    <div class="property">
      <span class="bold">listeners: </span>
      {#each $currentRequest.listeners as listener}
        <button class="eventButton nocursor">{listener.name}</button>
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
</div>
<div class="container">
  <h1>response</h1>
  <div class="response">
    <div class="json">
      {#if response}
        <JsonView json={response} />
      {/if}
    </div>
  </div>
</div>

<style>
  .container {
    margin: 0 auto;
  }

  .request,
  .response {
    background: white;
    margin-bottom: 20px;
    border: 3px solid #333;
    font-size: 13px;
  }

  .json {
    padding: 8px;
  }

  .property {
    padding: 8px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
  }

  .property span {
    width: 65px;
    display: inline-block;
  }

  .property:hover {
    background: lightblue;
  }

  .nocursor {
    background: white;
    color: black;
  }
</style>
