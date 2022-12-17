<template>
  <div>
    <input
      class="box-border rounded-md w-52 mt-5"
      type="text"
      placeholder="Search Games"
      v-model="searchInput"
    />
    <div
      class="box-border rounded-md bg-stone-600 shadow-lg justify-center align-center mt-4 ml-96 mr-96 hover:scale-110"
      v-for="game in searchResult"
      :key="game.room"
    >
      <div class="flex align-center justify-center">
        <img
          class="w-16 h-16 mr-10 mt-2"
          src="https://cdn-icons-png.flaticon.com/512/889/889455.png"
        />
        <div class="flex-col text-white">
          <h1>Room Name:{{ game.room }}</h1>
          <p>Sport: {{ game.sport }}</p>
          <p>Number of Players: {{ game.numberofplayers }}</p>
          <p>Location: {{ game.location }}</p>
          <p>Date/Time: {{ game.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDatabase, get, child, ref } from "firebase/database";
const gamesRef = ref(getDatabase());
export default {
  data() {
    return {
      games: [],
      searchInput: "",
    };
  },
  created() {
    get(child(gamesRef, `games/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            let value = childSnapshot.val();
            this.games.push(value);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    searchResult() {
      let tempGames = this.games;
      if (this.searchInput != "" && this.searchInput) {
        tempGames = tempGames.filter((game) => {
          return game.room
            .toUpperCase()
            .includes(this.searchInput.toUpperCase());
        });
      }
      return tempGames;
    },
  },
};
</script>
