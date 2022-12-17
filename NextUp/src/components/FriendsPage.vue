<template>
  <Nav />
  <div
    class="add-friend"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <!--Calling FriendsForm-->
    <FriendsForm />
  </div>
</template>

<!--Javascript code-->
<script scoped>
import FriendsForm from "./FriendsForm.vue";
import Nav from "./NavBar.vue";

export default {
  components: {
    FriendsForm,
    Nav,
  },
};

//CSS styling
</script>
<style scoped>
.add-friend {
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
