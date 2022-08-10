<script lang="ts">
  import loginOrRegister from "../stores/auth";
  let email = "";
  let emailError = null;
  let password = "";
  let passwordError = null;

  function validate() {
    if (email.length === 0) {
      emailError = "email is required";
    } else {
      emailError = null;
    }

    if (password.length < 8) {
      passwordError = "password should be at least 8 characters";
    } else {
      passwordError = null;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    validate();
  }
</script>

<h1>login to wsui</h1>
<form on:submit={(e) => handleSubmit(e)}>
  <p>
    need an account? <span class="click"><button>create account</button></span>
  </p>
  <div class="field">
    <label for="email">email</label>
    <input type="email" bind:value={email} />
    {#if emailError}
      <p class="error">{emailError}</p>
    {/if}
  </div>
  <div class="field">
    <label for="password">password</label>
    <input type="password" bind:value={password} />
    {#if passwordError}
      <p class="error">{passwordError}</p>
    {/if}
  </div>
  <div class="buttons">
    <button type="reset" on:click={() => ($loginOrRegister = null)}
      >cancel</button
    >
    <button type="submit">login</button>
  </div>
</form>

<style>
  form {
    background: white;
    width: fit-content;
    padding: 8px;
    font-size: 13px;
    margin: 0 auto;
  }

  input {
    outline-color: black;
  }

  h1 {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }

  p {
    margin-bottom: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 8px;
  }

  .error {
    margin-top: 10px;
    font-size: 10px;
    font-weight: bold;
  }

  p.error {
    color: #55f;
  }

  input {
    caret-color: black;
    padding: 3px 8px;
  }

  button {
    cursor: pointer;
    min-width: 100px;
  }

  label {
    margin-bottom: 5px;
    font-weight: bold;
    width: 70px;
    display: inline-block;
    text-align: left;
  }

  .field {
    margin-bottom: 13px;
    text-align: center;
  }

  .buttons {
    text-align: right;
  }
</style>
