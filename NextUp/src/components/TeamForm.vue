<template>
  <div class="w-full max-w-xs">
    <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-white mb-5 font-bold text-xl">Create Team</h1>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="teamName">
          Team Name
        </label>
        <input
          v-model="teamName"
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
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="sport"
        />
      </div>
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="numplayers">
          Number of players
        </label>
        <input
          v-model="numPlayers"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="numberofplayers"
        />
      </div>
      <div>
        <button
          @click="createTeam"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Create Team
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { getDatabase, ref, set } from "firebase/database";
const db = getDatabase();
export default {
  data() {
    return {
      teamnName: null,
      sport: null,
      numPlayers: null,
    };
  },
  methods: {
    createTeam() {
      const teamId = Date.now();
      set(ref(db, "team/" + teamId), {
        teamname: this.teamName,
        sport: this.sport,
        numberofplayers: this.numPlayers,
      });
    },
  },
};
</script>
