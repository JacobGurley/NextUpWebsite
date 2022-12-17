<template>
  <div class="w-full max-w-xs">
    <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-white mb-5 font-bold text-xl">Add Friend</h1>
      <div class="mb-4">
        <label class="block text-white text-sm font-bold mb-2" for="search">
          Search
        </label>
        <input
          v-model="friendemail"
          placeholder="Enter Friend's Email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="friend"
          type="text"
        />
      </div>
      <div>
        <button
          @click="addFriend"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Add
        </button>
      </div>
    </form>
  </div>

  <div class="w-full max-w-xs">
    <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h1 class="text-white mb-5 font-bold text-xl">My Friends</h1>
      <div>
        <router-link :to="{ path: 'myfriends' }"><button class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"> My Friends</button></router-link>
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
      friendemail: null,
    };
  },
  methods: {
    addFriend() {
      const friendsId = Date.now();
      set(ref(db, "friends/" + friendsId), {
        friendemail: this.friendemail,
      });
    },
},
};
</script>
