<template>
  <nav class="nav">
    <div
      class="container px-4 mx-auto flex flex-wrap items-center justify-between"
    >
      <div class="lg:flex lg:flex-grow items-center">
        <ul class="flex flex-col lg:flex-row list-none ml-auto">
          <li class="nav-item">
            <router-link
              to="basketball"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Basketball</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="football"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Football</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="soccer"
              class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              <span class="ml-2">Soccer</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.nav {
  background-color: black;
  margin-bottom: 570px;
}
</style>
