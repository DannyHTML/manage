<template>
  <header
    class="fixed left-0 right-0 z-50 m-auto flex h-20 w-11/12 items-center justify-between px-5 sm:w-4/5"
  >
    <transition name="fade">
      <div
        v-if="!scrollActive"
        :class="{
          hidden: scrollActive,
          'absolute left-0 top-0 -z-10 h-full w-full rounded-b-3xl bg-white shadow-2xl':
            !scrollActive,
        }"
      ></div>
    </transition>
    <div>
      <img src="/images/logo.svg" alt="" />
    </div>

    <!-- !Make the transition smoother -->
    <!-- test test -->
    <!-- test test -->

    <div class="lg:hidden">
      <transition name="slideOut">
        <div v-if="!isHidden" class="lg:hidden">
          <img
            @click="isHidden = !isHidden"
            :class="{ hidden: isHidden }"
            src="/images/icon-hamburger.svg"
            alt=""
          />
        </div>
      </transition>
      <transition name="slideOut">
        <div v-if="isHidden">
          <img
            class="w-[25px]"
            @click="isHidden = !isHidden"
            :class="{ hidden: !isHidden }"
            src="/images/icon-close.svg"
            alt=""
          />
        </div>
      </transition>
    </div>

    <!-- <div class="lg:hidden" :class="{ hidden: !isHidden }" v-if="isHidden"></div> -->

    <div class="hidden lg:flex">
      <ul class="flex gap-5">
        <li><a href="">Pricing</a></li>
        <li><a href="">Product</a></li>
        <li><a href="">About us</a></li>
        <li><a href="">Careers</a></li>
        <li><a href="">Community</a></li>
      </ul>
    </div>
    <div class="hidden lg:block">
      <Button />
    </div>
    <!-- mobile menu -->
    <transition name="fade">
      <div
        v-if="isHidden"
        class="fixed left-1/2 top-0 z-50 m-auto flex w-11/12 max-w-sm -translate-x-1/2 translate-y-28 justify-center bg-white py-10 lg:hidden"
      >
        <div class="max-h-[30vh] overflow-y-auto">
          <ul class="flex flex-col items-center gap-4 text-lg font-bold">
            <li><a href="">Pricing</a></li>
            <li><a href="">Product</a></li>
            <li><a href="">About us</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Community</a></li>
          </ul>
        </div>
      </div>
    </transition>

    <!-- bg-shape below -->

    <!-- <div class="fixed -right-20 top-10 -z-10 -rotate-45">
      <div class="h-40 w-80 rounded-l-full bg-bgShape"></div>
    </div> -->
  </header>
  <transition name="overlay">
    <div
      v-if="isHidden"
      :class="{ hidden: !isHidden }"
      class="fixed inset-0 z-40 bg-gradient-to-b from-white to-black opacity-30 lg:hidden"
    ></div
  ></transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import Button from "./components/Button.vue";

const isHidden = ref(false);

const scrollActive = ref(true);

const scrollEffect = () => {
  scrollActive.value = window.scrollY <= 60;
};

onMounted(() => {
  window.addEventListener("scroll", scrollEffect);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", scrollEffect);
});
</script>

<style scoped></style>
