<template>
  <nav
    class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-stone-600"
  >
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div
        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start"
      >
        <router-link
          to="home"
          class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
        >
          NextUp
        </router-link>
      </div>
      <div class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link
              to="creategame"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >Create Game
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="createteam"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Create Team</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="rateplayer"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Rate Player</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="friends"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Friends</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="locationreview"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="m1-2">Location Review</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="tournament"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Tournament</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="tutorial"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              ><span class="ml-2">Tutorial</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="contact"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              ><span class="ml-2">Contact Us</span>
            </router-link>
          </li>
          <li class="nav-item">
            <button
              @click="handleSignout"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "../router";

const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    console.log(isLoggedIn);
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignout = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>
