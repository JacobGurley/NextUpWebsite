<template>
  <div>
    <div
      class="box-border rounded-md bg-stone-600 shadow-lg justify-center align-center ml-16 mb-2 hover:scale-110"
      v-for="rating in ratings"
      :key="rating.playerName"
    >
      <div class="flex align-center justify-center">
        <div class="flex-col text-white">
          <h1>Ratings</h1>
          <p>Player Name: {{ rating.playerName }}</p>
          <p>Sport: {{ rating.sport }}</p>
          <p>Description: {{ rating.description }}</p>
          <p>Rating: {{ rating.starRating }} / 5</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDatabase, get, child, ref } from "firebase/database";
const ratingsRef = ref(getDatabase());
export default {
  data() {
    return {
      ratings: [],
    };
  },
  created() {
    get(child(ratingsRef, `ratings/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            let value = childSnapshot.val();
            this.ratings.push(value);
          });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
