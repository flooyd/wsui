<script>
  import { onMount } from "svelte";

  import { v4 as uuidv4 } from "uuid";

  import { currentRequest, manage } from "../stores/requests";

  let objToPrepare = JSON.parse(JSON.stringify($currentRequest));
  let dirty = false;
  let data = {
    events: [],
    listeners: [],
  };

  onMount(() => {
    objToPrepare = JSON.parse(JSON.stringify($currentRequest));
    objToPrepare.events.forEach((e) => {
      e.key = uuidv4();
    });
  });

  const removeEvent = (i) => {
    dirty = true;
    objToPrepare.events.splice(i, 1);
    objToPrepare = objToPrepare;
  };

  const removeListener = (i) => {
    dirty = true;
    objToPrepare.listeners.splice(i, 1);
    objToPrepare = objToPrepare;
  };

  const apply = () => {
    $currentRequest = objToPrepare;
  };

  const toggleOpen = (event, key) => {
    if (data.events.includes(key)) {
      data.events = data.events.filter((key) => key != key);
    } else {
      data.events.push(key);
    }

    data = data;
  };

  const collapseExpand = (which) => {
    if (which === "collapse") {
      data.events = [];
      data = data;
    } else {
      data.events = [];
      objToPrepare.events.forEach((e) => {
        data.events.push(e.key);
      });
      data = data;
    }
  };
</script>

<div class="container">
  <div class="header" role="heading">
    <h1>manage request</h1>
    {#if dirty}
      <button on:click={() => apply()}>apply</button>
      <button class="remove" on:click={() => ($manage = false)}
        >discard and close</button
      >
    {/if}
  </div>
  <div>
    <div class="manage">
      <div class="property">
        <span class="bold">name: </span>
        <input
          class="longInput"
          bind:value={objToPrepare.name}
          on:input={() => (dirty = true)}
        />
      </div>
      <div class="property">
        <span class="bold">ws: </span>
        <input
          class="longInput"
          bind:value={objToPrepare.ws}
          on:input={() => (dirty = true)}
        />
      </div>
      <div class="property events">
        <span class="bold">events: </span>
        <button class={objToPrepare.events.length === 0 ? "margin" : ""}
          >add event</button
        >
        <button on:click={() => collapseExpand("expand")}
          >expand all data</button
        >
        <button on:click={() => collapseExpand("collapse")}
          >collapse all data</button
        >
        {#each objToPrepare.events as event, i (uuidv4())}
          <div>
            <input bind:value={objToPrepare.events[i].name} />
            <button on:click={() => toggleOpen(event, event.key)}>data</button>
            <button on:click={() => removeEvent(i)} class="remove">X</button>
          </div>
          {#if data.events.includes(event.key)}
            <div class="data"><textarea /></div>
          {/if}
        {/each}
      </div>
      <div class="property events">
        <span class="bold">listeners: </span>
        {#each objToPrepare.listeners as listener, i}
          <div>
            <input bind:value={objToPrepare.listeners[i].name} />
            <button on:click={() => removeListener(i)} class="remove">X</button>
          </div>
        {/each}
        <button class={objToPrepare.listeners.length === 0 ? "margin" : ""}
          >add listener</button
        >
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

  .events {
    display: block;
  }

  .events div {
    margin-bottom: 8px;
  }

  .property span {
    width: 65px;
    margin-bottom: 20px;
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
    min-width: fit-content;
  }

  .remove:hover {
    background: lightcoral;
  }

  .margin {
    margin-left: 4px;
  }

  textarea {
    width: calc(100% - 8px);
    height: 200px;
  }
</style>
