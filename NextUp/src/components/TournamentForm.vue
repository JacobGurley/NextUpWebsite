<template>
    <div class="w-full max-w-xs">
        <form
        @submit.prevent="onSubmit"
        class="bg-stone-600 shadow-md rounded px-8 pt-6 pb-8 mb-4" 
        >
        <h1 class="text-white mb-5 font-bold text-xl">Generate a Printable Tournament Bracket</h1>
        <div id="generate-bracket">
        <button
          @click="redirect"
          class="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
        >
          Generate
        </button>
      </div>
      </form>
    </div>
</template>

<script>
import router from "../router";
export default{
    name: "generate-bracket",
    methods: {
        redirect() {
            window.open("https://vue-tournament-bracket-generator.netlify.app");
            router.push("/home");

        },

    },

};


</script>