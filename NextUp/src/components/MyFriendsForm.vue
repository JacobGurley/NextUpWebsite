<template>
    <form class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 class="text-white mb-5 font-bold text-xl">My Friends</h1>
      <div
        class="bg-stone-700 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        v-for="friends in searchResult"
        :key="friends.friendemail"
      >
        <div class="flex align-center justify-center">
          <div class="flex-col text-white">
            <h1>User Email: {{ friends.friendemail }}</h1>
          </div>
        </div>
      </div>
    </form>
  </template>
  
  <!--Javascript to access database-->
  <script>
  import { getDatabase, get, child, ref } from "firebase/database";
  const usersRef = ref(getDatabase());
  export default {
    data() {
      return {
        friends: [],
        searchInput: "",
      };
    },
    created() {
      get(child(usersRef, `friends/`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            snapshot.forEach((childSnapshot) => {
              let value = childSnapshot.val();
              this.friends.push(value);
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
        let tempUsers = this.friends;
        if (this.searchInput != "" && this.searchInput) {
          tempUsers = tempUsers.filter((friends) => {
            return friends.email
              .toUpperCase()
              .includes(this.searchInput.toUpperCase());
          });
        }
        return tempUsers;
      },
    },
  };
  </script>

  