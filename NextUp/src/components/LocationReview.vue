<template>
  <div>
    <div
      class="box-border rounded-md bg-stone-600 shadow-lg justify-center align-center ml-16 mb-2 hover:scale-110"
      v-for="review in reviews"
      :key="review.playerName"
    >
      <div class="flex align-center justify-center">
        <div class="flex-col text-white">
          <h1>Review</h1>
          <p>Address: {{ review.locationAddress }}</p>
          <p>Comments: {{ review.comments }}</p>
          <p>Rating: {{ review.starRating }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getDatabase, get, child, ref } from "firebase/database";
const reviewRef = ref(getDatabase());
export default {
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    get(child(reviewRef, `review/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            let value = childSnapshot.val();
            this.reviews.push(value);
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
