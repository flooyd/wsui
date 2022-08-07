<script lang="ts">
  import { data } from "../data/data";

  import requests, { currentRequest } from "../stores/requests";

  $requests = data.requests;
  console.log($currentRequest);
</script>

<h1>select a request</h1>

<div class="container">
  {#each $requests as request}
    <div class="name" on:click={() => ($currentRequest = request)}>
      {request.name}
    </div>
  {/each}
</div>

<style>
  .container {
    margin: 0 auto;
    border: 3px solid #333;
  }
  .name {
    background: white;
    padding: 8px;
    cursor: pointer;
  }

  .name:hover {
    background: lightblue;
  }
</style>
