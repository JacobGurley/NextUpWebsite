<template>
  <Nav />
  <div
    class="tutorial"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <TutorialForm />
  </div>
  <!--Youtube Link-->
  <div class="container">
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/nT5qyrxoqsA"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>
<script scoped>
import TutorialForm from "./TutorialForm.vue";
import Nav from "./NavBar.vue";

export default {
  components: {
    TutorialForm,
    Nav,
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 200px;
  right: 350px;
  width: 500px;
  height: 281px;
  /*padding-bottom: 5%;*/
  display: block;
}
.tutorial {
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
