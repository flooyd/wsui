<script>
  import loginOrRegister from "../stores/auth";
  import showHome from "../stores/home";
</script>

<div class="authContainer">
  <button class="google">login with google</button>
  <button on:click={() => ($loginOrRegister = "login")}>login</button>
  <button on:click={() => ($loginOrRegister = "register")}
    >create account</button
  >
  <button on:click={() => ($showHome = false)}>use demo</button>
</div>

<style>
  .authContainer {
    background: white;
    text-align: center;
    padding: 16px 0px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 0 auto;
  }

  button {
    min-width: 120px;
    font-size: 13px;
    padding: 8px 5px;
    width: fit-content;
    margin: 0 auto;
  }
</style>
