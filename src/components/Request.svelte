<script>
  import { currentRequest, manage } from "../stores/requests";
  import createClient from "../util/socket";
  import socket from "../stores/socket";
  import { onDestroy, onMount } from "svelte";
  import { JsonView } from "@zerodevx/svelte-json-view";
  import ManageRequest from "./ManageRequest.svelte";

  let content = {
    text: undefined, // used when in text mode
    json: undefined,
  };

  let connected = false;
  let response = null;

  const requests = () => {
    $currentRequest = null;
    $socket = undefined;
  };

  const manageRequest = () => {
    $manage = !$manage;
  };

  const connect = () => {
    $socket = createClient($currentRequest.ws);
  };

  onDestroy(() => {
    $socket = null;
  });

  onMount(() => {
    connect();
  });

  $: if ($currentRequest && $socket) {
    console.log("socket");
    $socket.on("selfConnect", (data) => {
      response = { message: data };
      connected = true;
    });
    $socket.on("createThing", (data) => (response = data));
    $socket.on("createRequest", (data) => {
      response = data;
    });
    $socket.on("findAllThings", (data) => (response = data));
    $socket.on("deleteThings", (data) => (response = data));
    $socket.onAny((event, data) => {
      if (event === "message") {
        $socket.close();
        if (JSON.parse(data)) {
          console.log(JSON.parse(data).message);
          response = { error: JSON.parse(data).message };
        } else {
          console.log(data);
        }
      }
    });
  }

  const emitEvent = (name) => {
    name === "createThing"
      ? $socket.emit("createRequest", { blah: 7, xd: 5 })
      : null;
    name === "deleteThings" ? $socket.emit(name, { number: 77 }) : null;
    name === "findAllThings" ? $socket.emit(name) : null;
  };
</script>

<div class="container">
  <div class="header">
    <h1>request</h1>
    <button on:click={() => manageRequest()}>manage</button>
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
      <button class="nocursor">connect</button>
      <button on:click={() => requests()}>requests</button>
    </div>
    <div class="property">
      <span class="bold">listeners: </span>
      {#each $currentRequest.listeners as listener}
        <button class="eventButton nocursor">{listener.name}</button>
      {/each}
      {#if $currentRequest.listeners.length === 0}
        use manage to add listeners
      {/if}
    </div>
    <div class="property">
      <span class="bold">events: </span>
      {#each $currentRequest.events as event}
        <button class="eventButton" on:click={() => emitEvent(event.name)}
          >{event.name}</button
        >
      {/each}
      {#if $currentRequest.events.length === 0}
        use manage to add events
      {/if}
    </div>
  </div>
</div>
{#if $manage}
  <ManageRequest />
{/if}
{#if connected}
  <div class="container">
    <div class="header" role="heading">
      <h1>response</h1>
    </div>
    <div>
      <div class="response">
        <div class="json">
          <div class="editor">
            <!-- <JSONEditor bind:content /> -->
          </div>
          {#if response}
            <JsonView json={response} />
          {/if}
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  .container {
    margin: 0 auto;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }

  .header h1 {
    width: fit-content;
    margin: 0px;
    margin-right: 13px;
  }

  .request,
  .response {
    background: white;
    margin-bottom: 20px;

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

  .editor {
    margin-bottom: 13px;
  }
</style>
