<script>
  import { currentRequest, manage } from "../stores/requests";

  const objToPrepare = $currentRequest;

  $: console.log(objToPrepare);
</script>

<div class="container">
  <div class="header" role="heading">
    <h1>manage request</h1>
    <button>apply</button>
    <button on:click={() => ($manage = false)}>done</button>
  </div>
  <div>
    <div class="manage">
      <div class="property">
        <span class="bold">name: </span>
        <input class="longInput" bind:value={objToPrepare.name} />
      </div>
      <div class="property">
        <span class="bold">ws: </span>
        <input class="longInput" bind:value={objToPrepare.ws} />
      </div>
      <div class="property">
        <span class="bold">events: </span>
        {#each objToPrepare.events as event, i}
          <div>
            <input bind:value={objToPrepare.events[i].name} />
            <button>data</button>
            <button class="remove">X</button>
          </div>
        {/each}
        <button>add event</button>
      </div>
      <div class="property">
        <span class="bold">listeners: </span>
        {#each objToPrepare.events as event, i}
          <div>
            <input bind:value={objToPrepare.listeners[i].name} />
            <button class="remove">X</button>
          </div>
        {/each}
        <button>add listener</button>
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

  .header button {
    margin-right: 8px;
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

  input {
    min-width: fit-content;
    padding: 3px 8px;
  }

  .longInput {
    width: 250px;
  }

  .remove {
    width: 37px;
  }

  .remove:hover {
    background: lightcoral;
  }
</style>
