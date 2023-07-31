<script setup lang="ts">
import Header from "./Header.vue";
import Graph from "./Graph.vue";
import SectionFirst from "./SectionFirst.vue";
import About from "./About.vue";
import AboutOptions from "./AboutOptions.vue";
</script>

<template>
  <div class="pb-28">
    <Header />
  </div>
  <div class="mb-14 sm:justify-between md:flex">
    <div class="order-1">
      <Graph />
    </div>
    <SectionFirst />
  </div>
  <div>
    <div class="mb-5">
      <About />
    </div>
    <AboutOptions />
  </div>
</template>

<style scoped></style>
