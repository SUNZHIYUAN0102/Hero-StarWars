<template>
  <nav>
    <ul>
      <router-link to="/home" tag="li" active-class="meow">
        <span><font-awesome-icon icon="fa-solid  fa-home" /></span>
        <p>Heroes</p>
      </router-link>
      <router-link to="/favourite" tag="li" active-class="meow">
        <span><font-awesome-icon icon="fa-solid  fa-bookmark" /></span>
        <p>Favourite</p>
      </router-link>
    </ul>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
nav {
  width: 100%;
  height: 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #fff;
}
ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
}
li {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  font-size: 16px;
  color: black;
  cursor: pointer;
}
.meow {
  color: orange;
}
</style>