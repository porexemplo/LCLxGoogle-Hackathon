<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
  </nav> -->
  <!-- <router-view /> -->
  <img alt="Vue logo" src="./assets/jaime.png" class="jaime" />
  <Navbar />
  <MessageBox />
  <InputPanel />
</template>

<script>
import Navbar from "./components/Navbar.vue";
import InputPanel from "./components/InputPanel.vue";
import MessageBox from "./components/MessageBox.vue";

export default {
  name: "App",
  components: {
    Navbar,
    InputPanel,
    MessageBox,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

<style scoped>
.jaime {
  width: 150px;
  height: auto;
  margin: 0;
  position: absolute;
  top: 0;
  right: 10px;
  z-index: 1000;
}
</style>
