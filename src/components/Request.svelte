<script>
  import { currentRequest } from "../stores/requests";

  const requests = () => {
    $currentRequest = null;
  };
</script>

<div class="header">
  <h1>request</h1>
  <div><button>connect</button></div>
  <div><button on:click={() => requests()}>requests</button></div>
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
</div>

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
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

  button {
    margin-left: 25px;
  }
</style>
