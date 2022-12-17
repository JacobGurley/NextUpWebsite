<template>
  <div class="w-full max-w-xs">
    <form
      ref="form"
      @submit.prevent="sendEmail"
      class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="text-white mb-5 font-bold text-xl">Contact Us</h1>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="roomname">
          Email
        </label>
        <input
          v-model="email"
          placeholder="Enter Email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Message
        </label>
        <textarea
          v-model="message"
          placeholder="Message"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
        />
      </div>
      <div>
        <button
          @click="sendEmail"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      email: null,
      message: null,
    };
  },
  methods: {
    sendEmail() {
      emailjs
        .send(
          "service_e4p78uk",
          "template_2z6qp1q",
          { from_name: this.email, message: this.message },
          "f3mezunUlJ3b6Xh9Z"
        )
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
      this.email = null;
      this.message = null;
    },
  },
};
</script>
