<script>
  import showHome from "../stores/home";
  import loginOrRegister from "../stores/auth";
  import { currentRequest } from "../stores/requests";

  const clickHome = () => {
    $showHome = true;
    $loginOrRegister = null;
    $currentRequest = null;
  };
</script>

<nav>
  <div class="title" on:click={() => clickHome()}>wsui</div>
  <div class="settings">settings</div>
</nav>

<style>
  nav {
    height: fit-content;
    background: lightblue;
    padding: 8px 0px;
    position: fixed;
    top: 0px;
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    width: fit-content;
    cursor: pointer;
  }

  .settings {
    background: white;
    color: black;
    padding: 5px 8px;

    margin-left: 25px;
    cursor: pointer;
  }

  .settings:hover {
    background: #55f;
    color: white;
  }
</style>
