<template>
  <div
    class="register"
    :style="{
      'background-image':
        'url(https://image.roku.com/blog/wp-content/uploads/2020/07/Live_Sports_graphic_1200x628.jpg)',
      'background-repeat': 'no-repeat',
      'background-size': 'cover',
    }"
  >
    <h1>NextUp</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "./RegisterForm.vue";
export default {
  components: {
    RegisterForm,
  },
};
</script>
<style scoped>
h1 {
  color: white;
}
.register {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
}
</style>
