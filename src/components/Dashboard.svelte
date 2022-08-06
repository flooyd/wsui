<script>
  import Requests from "./Requests.svelte";
  import { currentRequest } from "../stores/requests";
  import Request from "./Request.svelte";
</script>

{#if !$currentRequest}
  <Requests />
{/if}
{#if $currentRequest}
  <Request />
{/if}
