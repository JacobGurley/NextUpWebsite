<template>
  <router-view />
</template>

<script>
import "./assets/tailwind.css";
export default {
  name: "App",
};
</script>

<style>
html.dark {
  color-scheme: dark;
}
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
