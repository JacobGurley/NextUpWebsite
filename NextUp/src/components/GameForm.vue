<template>
  <div class="w-full max-w-xs">
    <form
      @submit.prevent="onSubmit"
      class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <h1 class="text-white mb-5 font-bold text-xl">Create Game</h1>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="roomname">
          Room Name
        </label>
        <input
          v-model="roomName"
          placeholder="Enter Room Name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="roomname"
          type="text"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Sport
        </label>
        <input
          v-model="sport"
          placeholder="Sport"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="sport"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Number of players
        </label>
        <input
          v-model="numPlayers"
          placeholder="Enter Number of Players"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="numberofplayers"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Location
        </label>
        <GMapAutocomplete
          ref="location"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          @place_changed="setPlace"
        >
        </GMapAutocomplete>
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="sport">
          Date / Time
        </label>
        <DatePicker
          v-model="date"
          :enable-time-picker="true"
          :is-24="false"
          :preview-format="format"
        ></DatePicker>
      </div>
      <div>
        <button
          @click="validate"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Create Game
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
      roomName: null,
      sport: null,
      numPlayers: null,
      location: null,
      date: null,
      validationErrors: [],
    };
  },
  methods: {
    createGame() {
      const gameId = Date.now();
      set(ref(db, "games/" + gameId), {
        room: this.roomName,
        sport: this.sport,
        numberofplayers: this.numPlayers,
        location: this.location,
        date: this.date.toString(),
        gid: gameId,
      });
      this.roomName = null;
      this.sport = null;
      this.numPlayers = null;
      this.$refs.location.$el.value = null;
      this.date = null;
    },
    setPlace(place) {
      this.location = place.formatted_address;
    },
    clearLocation() {
      this.location = null;
    },
    resetError() {
      this.validationErrors = [];
    },
    format() {},

    validate() {
      // Clear the errors before we validate again
      this.resetError();
      // email validation
      if (!this.roomName) {
        this.validationErrors.push(
          "<strong>Room Name</strong> cannot be empty."
        );
      }
      if (!this.sport) {
        this.validationErrors.push("<strong>Sport</strong> cannot be empty.");
      }
      if (!this.numPlayers) {
        this.validationErrors.push(
          "<strong>Number of Players</strong> cannot be empty."
        );
      }
      if (isNaN(this.numPlayers)) {
        this.validationErrors.push(
          "<strong>Number of Players</strong> must be a number."
        );
      }
      if (!this.location) {
        this.validationErrors.push(
          "<strong>Location</strong> cannot be empty."
        );
      }
      // when valid then sign in
      if (this.validationErrors.length <= 0) {
        this.createGame();
      }
    },
  },
};
</script>
