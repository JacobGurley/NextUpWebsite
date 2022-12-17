<template>
  <div class="w-full max-w-xs">
    <form
      @submit.prevent="onSubmit"
      class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="text-white mb-5 font-bold text-xl">Rate a Player</h1>

      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="playername">
          Player's Name
        </label>
        <input
          v-model="playerName"
          placeholder="Enter Player's Name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="playername"
          type="text"
        />
      </div>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Sport
        </label>
        <input
          v-model="sport"
          placeholder="Enter Sport"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sport"
          type="text"
        />
      </div>
      <!--Star rating system-->
      <div class="mb-4">
        <label class="block text-white text-sm font-bold" for="rating">
          Rating
        </label>
        <div class="stars">
          <input
            v-model="starRating"
            type="radio"
            id="five"
            name="rate"
            value="5"
          />
          <label for="five"></label>
          <input
            v-model="starRating"
            type="radio"
            id="four"
            name="rate"
            value="4"
          />
          <label for="four"></label>
          <input
            v-model="starRating"
            type="radio"
            id="three"
            name="rate"
            value="3"
          />
          <label for="three"></label>
          <input
            v-model="starRating"
            type="radio"
            id="two"
            name="rate"
            value="2"
          />
          <label for="two"></label>
          <input
            v-model="starRating"
            type="radio"
            id="one"
            name="rate"
            value="1"
          />
          <label for="one"></label>
        </div>
      </div>
      <div class="mb-4">
        <label
          class="block text-white text-sm font-bold mb-2"
          for="description"
        >
          Reason for your Rating?
        </label>
        <input
          v-model="description"
          placeholder="Enter Description"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="rating"
          type="text"
        />
      </div>
      <div>
        <button
          @click="validate"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </div>
    </form>
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
  </div>
</template>
<script>
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();
export default {
  data() {
    return {
      playerName: null,
      sport: null,
      starRating: null,
      description: null,
      validationErrors: [],
    };
  },
  methods: {
    //rate player function
    ratePlayer() {
      const playerId = Date.now();
      set(ref(db, "ratings/" + playerId), {
        playerName: this.playerName,
        sport: this.sport,
        starRating: this.starRating,
        description: this.description,
      });

      this.playerName = null;
      this.sport = null;
      this.starRating = null;
      this.description = null;
    },
    resetError() {
      this.validationErrors = [];
    },
    //validate errors function
    validate() {
      this.resetError();

      if (!this.playerName) {
        this.validationErrors.push(
          "<strong>Player's Name</strong> cannot be empty."
        );
      }

      if (!isNaN(this.playerName)) {
        this.validationErrors.push(
          "<strong>Player's Name</strong> cannot be a number."
        );
      }

      if (!this.sport) {
        this.validationErrors.push("<strong>Sport</strong> cannot be empty.");
      }

      if (!isNaN(this.sport)) {
        this.validationErrors.push(
          "<strong>Sport</strong> cannot be a number."
        );
      }

      if (!this.starRating) {
        this.validationErrors.push("<strong>Rating</strong> cannot be empty.");
      }

      if (!this.description) {
        this.validationErrors.push(
          "<strong>Description</strong> cannot be empty."
        );
      }

      if (this.validationErrors.length <= 0) {
        this.ratePlayer();
        const rate = new Notification("Rating Submitted", {
          body: "Thank you for your submission.",
        });
        rate;
      }
    },
  },
};
</script>

<style>
.stars {
  display: flex;
  justify-content: center;
  align-items: center;
}
/*Removing circles*/
.stars input {
  display: none;
}
/*Size and color of the stars*/
.stars label {
  float: right;
  font-size: 30px;
  color: lightgrey;
  margin: 0 10px;
  text-shadow: 1px 1px #bbb;
}
/*Adding the star*/
.stars label:before {
  content: "★";
}
/*Styling stars*/
.stars input:checked ~ label {
  color: gold;
  text-shadow: 1px 1px #c60;
}
/*Styling stars*/
.stars:not(:checked) > label:hover,
.stars:not(:checked) > label:hover ~ label {
  color: gold;
}
/*Styling stars*/
.stars input:checked > label:hover,
.stars input:checked > label:hover ~ label {
  color: gold;
  text-shadow: 1px 1px goldenrod;
}
</style>
