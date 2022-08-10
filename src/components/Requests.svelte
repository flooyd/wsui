<script lang="ts">
  import { onMount } from "svelte";

  import { data } from "../data/data";

  import requests, { currentRequest } from "../stores/requests";

  $requests = data.requests;

  const populateCurrentRequest = (request, i) => {
    $currentRequest = request;
    $currentRequest.i = i;
  };
</script>

<h1>select a request</h1>

<div class="container">
  {#each $requests as request, i}
    <div class="name" on:click={() => populateCurrentRequest(request, i)}>
      {request.name}
    </div>
  {/each}
</div>

<style>
  .container {
    margin: 0 auto;
  }
  .name {
    background: white;
    padding: 8px;
    font-size: 13px;
    cursor: pointer;
  }

  .name:hover {
    background: lightblue;
  }
</style>
