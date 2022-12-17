<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div>
        <input
          v-model="email"
          placeholder="EMAIL"
          class="input input-email"
          required
        />
      </div>
      <div>
        <input
          v-model="password"
          class="input input-password"
          placeholder="PASSWORD"
          type="password"
          required
        />
      </div>
      <p v-if="errorMsg">{{ errorMsg }}</p>
      <button @click="login" class="login login-button">LOGIN</button>
    </form>
    <label>Don't Have An Account? </label>
    <router-link
      class="router-link"
      style="font-size: 12px; font-weight: bold"
      to="./register"
      >Sign Up</router-link
    >
  </div>
</template>
<script>
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "../router";
export default {
  data() {
    return {
      email: null,
      password: null,
      errorMsg: null,
    };
  },
  methods: {
    login() {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          alert("Successfully Signed In!");
          router.push("./home");
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMsg = "Invalid Email";
              break;
            case "auth/user-not-found":
              this.errorMsg = "No account with that email was found";
              break;
            case "auth/wrong-password":
              this.errorMsg = "Incorrect password";
              break;
            default:
              this.errorMsg = "Email or password was incorrect";
              break;
          }
        });
    },
  },
};
</script>
<style scoped>
.router-link {
  text-decoration: none;
  color: white;
}
label {
  font-size: 10px;
  color: white;
}
input {
  background: transparent;
  border: 1px solid white;
}
input::placeholder {
  font-size: 10px;
  font-family: "Poppins";
  font-weight: 300;
  color: white;
}
.input-email {
  margin-top: 15px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.input-password {
  margin-top: 20px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.login-button {
  font-family: "Poppins";
  color: black;
  font-weight: 600;
  border: none;
  font-size: 10px;
  width: 210px;
  height: 30px;
  margin-top: 30px;
  border-radius: 5px;
  background: white;
}
</style>
