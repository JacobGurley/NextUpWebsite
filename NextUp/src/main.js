import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import "v-calendar/dist/style.css";
// import VCalendar from "v-calendar";
import DatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import VueGoogleMaps from "@fawmi/vue-google-maps";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import "./assets/tailwind.css";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFTX6Mgr6gXPbgKzzlBb2S5LXOgzoi3Ns",
  authDomain: "nextup-e7ea6.firebaseapp.com",
  databaseURL: "https://nextup-e7ea6-default-rtdb.firebaseio.com",
  projectId: "nextup-e7ea6",
  storageBucket: "nextup-e7ea6.appspot.com",
  messagingSenderId: "271219655581",
  appId: "1:271219655581:web:facf706538f4354a19a574",
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.component("DatePicker", DatePicker);
app.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyB2Fv6Fie1aw7WBDO7CWDGxYezS6tlj1Pg",
    libraries: "places",
  },
});
app.mount("#app");
