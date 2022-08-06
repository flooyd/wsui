<script lang="ts">
  import { data } from "../data/data";

  import requests, { currentRequest } from "../stores/requests";

  $requests = data.requests;
  console.log($currentRequest);
</script>

<h1>select a request</h1>

{#each $requests as request}
  <div class="name" on:click={() => ($currentRequest = request)}>
    {request.name}
  </div>
{/each}

<style>
  .name {
    background: white;
    margin-right: 20px;
    border-bottom: 1px solid #333;
    padding: 8px;
    cursor: pointer;
  }

  .name:hover {
    background: #55f;
  }
</style>
