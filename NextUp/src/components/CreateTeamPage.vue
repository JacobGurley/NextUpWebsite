<template>
  <Nav />
  <div
    class="create-team"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <TeamForm />
  </div>
</template>
<script scoped>
import TeamForm from "./TeamForm.vue";
import Nav from "./NavBar.vue";

export default {
  components: {
    TeamForm,
    Nav,
  },
};
</script>
<style scoped>
.create-team {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}
.background-image {
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
