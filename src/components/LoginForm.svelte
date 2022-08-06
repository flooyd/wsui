<script lang="ts">
  import loginOrRegister from "../stores/auth";
  let email = "";
  let emailError = null;
  let password = "";
  let passwordError = null;

  function validate() {
    if (email.length === 0) {
      emailError = "Email is required";
    } else {
      emailError = null;
    }

    if (password.length < 8) {
      passwordError = "Password should be at least 8 characters";
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
<p>Need an account? <span class="click">register</span></p>
<form on:submit={(e) => handleSubmit(e)}>
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
  <button type="submit">login</button>
  <button type="reset" on:click={() => ($loginOrRegister = null)}>cancel</button
  >
</form>

<style>
  h1 {
    font-size: 20px;
    text-align: center;
    width: 100%;
  }

  p {
    margin-top: 20px;
    text-align: center;
  }

  .error {
    margin-top: 10px;
    font-size: 10px;
    font-weight: bold;
  }

  .click {
    font-weight: bold;
    cursor: pointer;
  }

  .click:hover {
    color: blue;
  }

  form {
    width: fit-content;
    margin: 20px auto;
    padding: 13px;
    flex-direction: column;
  }

  input {
    caret-color: black;
    padding: 3px 8px;
  }

  button {
    margin: 13px 0px;
  }

  label {
    margin-bottom: 5px;
  }

  .field {
    display: flex;
    flex-direction: column;
    margin-bottom: 13px;
  }
</style>
