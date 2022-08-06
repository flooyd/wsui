<nav>
  <div class="title">wsui</div>
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
    border-bottom: 3px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .title {
    font-size: 20px;
    font-family: "Noto Sans", sans-serif;
    text-align: center;
    width: fit-content;
  }

  .settings {
    background: white;
    padding: 5px 8px;
    border-radius: 5px;
    margin-left: 25px;
    cursor: pointer;
  }

  .settings:hover {
    color: white;
    background: #55f;
    color: white;
    border-color: white;
  }
</style>
