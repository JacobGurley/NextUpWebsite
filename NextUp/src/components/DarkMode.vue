<template>
  <button
    class="flex justify-center align-center w-32 bg-black rounded"
    @click="toggleDark()"
  >
    <span class="text-white dark:text-red"
      >{{ isDark ? "Dark" : "Light" }} Mode</span
    >
  </button>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
console.log(isDark.value);
</script>
