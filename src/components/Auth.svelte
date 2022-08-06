<script>
  import loginOrRegister from "../stores/auth";
</script>

<div class="auth">
  <button class="google">Login with Google</button>
</div>
<div class="or">or</div>
<div class="auth">
  <button on:click={() => ($loginOrRegister = "register")}
    >Create Account</button
  >
  <button on:click={() => ($loginOrRegister = "login")}>Login</button>
</div>

<style>
  .auth {
    text-align: center;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 20px 0px;
  }

  button {
    background: white;
    width: 120px;
    border-color: #333;
    padding: 8px;
    margin-right: 13px;
  }

  button:hover {
    color: white;
    background: #333;
    cursor: pointer;
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
