<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div v-if="validationErrors.length">
        <button @click="resetError()" class="delete"></button>
        <div class="content">
          Please resolve the following error(s) before proceeding.
          <ul style="margin-top: 0.3em; margin-left: 1em">
            <li
              v-for="(error, index) in validationErrors"
              :key="`error-${index}`"
              v-html="error"
            />
          </ul>
        </div>
      </div>
      <div>
        <input
          v-model="email"
          class="input input-form"
          placeholder="EMAIL"
          type="email"
          required
        />
      </div>
      <div>
        <input
          v-model="password"
          class="input input-form"
          type="password"
          placeholder="PASSWORD"
          required
        />
      </div>
      <div>
        <input
          v-model="passwordRepeat"
          class="input input-form"
          placeholder="RE-ENTER PASSWORD"
          type="password"
          required
        />
      </div>
      <button @click="validate" class="register register-button">
        CREATE ACCOUNT
      </button>
    </form>
  </div>
</template>
<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import router from "../router";
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();
export default {
  data() {
    return {
      email: null,
      password: null,
      passwordRepeat: null,
      validationErrors: [],
    };
  },
  methods: {
    register() {
      createUserWithEmailAndPassword(getAuth(), this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(db, "users/" + user.uid), {
            email: this.email,
            password: this.password,
          });
          alert("Successfully registered!");
          router.push("/home");
        })

        .catch((error) => {
          console.log(error.code);
          alert(error.message);
        });
    },
    resetError() {
      this.validationErrors = [];
    },
    validate() {
      // Clear the errors before we validate again
      this.resetError();
      // email validation
      if (!this.email) {
        this.validationErrors.push("<strong>E-mail</strong> cannot be empty.");
      }
      if (/.+@.+/.test(this.email) != true) {
        this.validationErrors.push("<strong>E-mail</strong> must be valid.");
      }
      // password validation
      if (!this.password) {
        this.validationErrors.push("<strong>Password</strong> cannot be empty");
      }
      if (/.{6,}/.test(this.password) != true) {
        this.validationErrors.push(
          "<strong>Password</strong> must be at least 6 characters long"
        );
      }
      if (!(this.password === this.passwordRepeat)) {
        this.validationErrors.push("<strong>Passwords</strong> did not match");
      }
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.register();
      }
    },
  },
};
</script>
<style scoped>
input {
  background: transparent;
  border: 1px solid white;
}
input::placeholder {
  font-size: 10px;
  font-family: "Montserrat";
  font-weight: 300;
  color: white;
}
.input-form {
  margin-top: 15px;
  width: 200px;
  height: 25px;
  border-radius: 5px;
}
.register-button {
  font-family: "Montserrat";
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
