<template>
  <Nav />
  <div
    class="homepage"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <DarkMode />
    <SearchBar />
  </div>
</template>
<script setup>
import Nav from "./NavBar.vue";
import SearchBar from "./SearchBar.vue";
import DarkMode from "./DarkMode.vue";
//Notification feature

const notification = new Notification("Welcome to NextUp!", {
  body: "Thanks for turning on notifications! You can turn them off anytime you'd like.",
});
console.log(Notification.permission);
if (Notification.permission == "granted") {
  notification;
} else if (Notification.permission != "denied") {
  Notification.requestPermission().then((permission) => {
    if (permission == "granted") {
      notification;
    }
  });
}
</script>
<style scoped>
h1 {
  color: white;
}
.homepage {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
</style>
