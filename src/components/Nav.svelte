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
    border-bottom: 3px solid #333;
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
    color: black;
    padding: 5px 8px;
    border-radius: 5px;
    margin-left: 25px;
    cursor: pointer;
    border: 1px solid #333;
  }

  .settings:hover {
    background: #55f;
    color: white;
  }
</style>
