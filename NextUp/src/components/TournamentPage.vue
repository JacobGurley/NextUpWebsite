<template>
    <Nav />
    <div
      class="tournament"
      :style="{
        'background-image':
          'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
        'background-repeat': 'no-repeat',
        'background-size': 'cover',
      }"
    >
      <TournamentForm />
    </div>
  </template>
  <script scoped>
  import TournamentForm from "./TournamentForm.vue";
  import Nav from "./NavBar.vue";
  

  export default {
  components: {
    TournamentForm,
    Nav,
    
},
};
</script>

<style scoped>
.tournament {
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