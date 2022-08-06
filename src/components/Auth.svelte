<script>
  import loginOrRegister from "../stores/auth";
</script>

<div class="authContainer">
  <div class="auth">
    <button class="google">login with Google</button>
  </div>
  <div class="or">or</div>
  <div class="auth">
    <button on:click={() => ($loginOrRegister = "register")}
      >create Account</button
    >
    <button on:click={() => ($loginOrRegister = "login")}>login</button>
  </div>
</div>

<style>
  .authContainer {
    border: 3px solid #333;
    width: fit-content;
    padding-left: 13px;
    margin: 0 auto;
  }
  .auth {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0px;
  }

  button {
    min-width: 120px;
    padding: 8px 5px;
    margin-right: 13px;
  }

  .or {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
  }

  .google {
    width: fit-content;
  }
</style>
