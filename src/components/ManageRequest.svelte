<script>
  import { JSONEditor } from "svelte-jsoneditor";
  import { currentRequest, manage } from "../stores/requests";

  let content = { json: $currentRequest };
</script>

<div class="container">
  <div class="header" role="heading">
    <h1>manage request</h1>
    <button>apply</button>
    <button on:click={() => ($manage = false)}>done</button>
  </div>
  <div>
    <div class="manage">
      <div class="json">
        <JSONEditor {content} />
      </div>
    </div>
  </div>
</div>

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

  .manage {
    background: white;
    margin-bottom: 20px;
    border: 3px solid #333;
    font-size: 13px;
  }

  .json {
    padding: 8px;
  }

  button {
    margin-right: 8px;
  }
</style>
