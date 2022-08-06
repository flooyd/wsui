<script>
  import { currentRequest } from "../stores/requests";

  const requests = () => {
    $currentRequest = null;
  };
</script>

<h1>
  request
  <span><button>connect</button></span>
  <span><button on:click={() => requests()}>requests</button></span>
</h1>
<div class="request">
  <div class="header">
    <div class="property">
      <span class="bold">name: </span>
      {$currentRequest.name}
    </div>
    <div class="property">
      <span class="bold">ws: </span>
      {$currentRequest.ws}
    </div>
  </div>
</div>

<style>
  .request {
    background: white;
  }

  .property {
    padding: 8px;
  }

  button {
    margin-left: 25px;
  }
</style>
