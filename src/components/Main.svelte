<script>
  import loginOrRegister from "../stores/auth";
  import Auth from "./Auth.svelte";
  import Dashboard from "./Dashboard.svelte";
  import LoginForm from "./LoginForm.svelte";
  import showHome from "../stores/home";
</script>

<main>
  {#if $showHome}
    {#if !$loginOrRegister}
      <h1>welcome to wsui 👋</h1>
      <p>
        create and save websocket (may only support socket.io) requests, events,
        and listeners
      </p>
      <Auth />
    {/if}
    {#if $loginOrRegister}
      <LoginForm />
    {/if}
  {/if}
  {#if !$showHome}
    <Dashboard />
  {/if}
</main>

<style>
  main {
    margin-top: 50px;
    padding-top: 31px;
    padding-left: 20px;
    padding-right: 20px;
  }

  p {
    margin: 20px 0px;
    text-align: center;
  }
</style>
