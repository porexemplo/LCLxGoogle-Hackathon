<template>
  <div class="navbar-container">
    <img src="../assets/logo.png" alt="logo" class="logo" />
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
};
</script>

<style scoped>
.navbar-container {
  position: fixed;
  top: 0;
  width: 100%;
  color: white;
  text-align: left;
  padding: 1rem;
  z-index: 100;
}
.logo {
  width: 50px;
  height: 50px;
  margin: 0;
}
</style>
