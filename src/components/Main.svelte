<script>
  import loginOrRegister from "../stores/auth";
  import Auth from "./Auth.svelte";
  import LoginForm from "./LoginForm.svelte";
</script>

<main>
  {#if !$loginOrRegister}
    <h1>Welcome 👋</h1>
    <p>
      wsui allows you to create and save websocket requests, events, and
      listeners.
    </p>
    <Auth />
  {/if}
  {#if $loginOrRegister}
    <LoginForm />
  {/if}
</main>

<style>
  main {
    margin-top: 50px;
    padding-top: 31px;
  }

  p {
    margin: 20px 0px;
    text-align: center;
    font-weight: bold;
  }
</style>
