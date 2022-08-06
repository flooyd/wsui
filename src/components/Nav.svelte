<nav>
  <div class="title">wsui</div>
  <div class="settings">settings</div>
</nav>

<style>
  nav {
    height: fit-content;
    background: lightblue;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 8px 0px;
    position: fixed;
    top: 0px;
    width: 100%;
    border-bottom: 3px solid black;
  }

  .title {
    margin-right: 20px;
    font-size: 31px;
    font-family: "Noto Sans", sans-serif;

    width: 60px;
    width: calc(50% + 15px);
    text-align: right;
  }

  .settings {
    background: white;
    padding: 5px 8px;
    border-radius: 5px;
    margin-right: 20px;
    cursor: pointer;
  }

  .settings:hover {
    color: white;
    background: #55f;
    color: white;
    border-color: white;
  }
</style>
