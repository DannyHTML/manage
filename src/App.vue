<script setup lang="ts">
import Header from "./Header.vue";
import Graph from "./Graph.vue";
import SectionFirst from "./SectionFirst.vue";
import About from "./About.vue";
import AboutOptions from "./AboutOptions.vue";
import Testimonials from "./Testimonials.vue";
import Banner from "./Banner.vue";
</script>

<template>
  <div class="pb-28">
    <Header />
  </div>
  <div class="mb-14 md:flex md:justify-around">
    <div class="order-1">
      <Graph />
    </div>
    <SectionFirst />
  </div>
  <div class="lg:flex lg:justify-around">
    <div class="mb-5">
      <About />
    </div>
    <div>
      <AboutOptions />
    </div>
  </div>
  <Testimonials />
  <Banner />
</template>

<style scoped></style>
