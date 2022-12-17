<!--This creates a form that allows users to type. It also links to firebase.-->
<template>
  <div class="w-full max-w-xs">
    <form class="bg-neutral-600 shadow-md rounded px-10 pt-10 pb-8 mb-4">
      <h1 class="text-white mb-10 font-bold text-xl">Location Review</h1>
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
      <!--Star rating system-->
      <div class="block text-white text-sm font-bold mb-10">
        Rating
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
      <!--Text Block for comments-->
      <div class="mb-6">
        <label class="block text-white text-sm font-bold mb-2" for="comments">
          Comments
        </label>
        <textarea
          v-model="comments"
          placeholder="Enter Your Comments"
          id="comments"
          name="commentsonlocation"
          rows="4"
          cols="30"
        >
          Enter comments here...
        </textarea>
      </div>
      <div>
        <button
          @click="submit"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
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
      locationAddress: null,
      comments: null,
      starRating: null,
    };
  },
  methods: {
    submit() {
      const reviewId = Date.now();
      set(ref(db, "review/" + reviewId), {
        locationAddress: this.locationAddress,
        comments: this.comments,
        starRating: this.starRating,
      });
    },
    setPlace(place) {
      this.locationAddress = place.formatted_address;
    },
  },
};
</script>

<style>
.stars {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}
/*Removing circles*/
.stars input {
  display: none;
}
/*Size and color of the stars*/
.stars label {
  float: right;
  font-size: 25px;
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
