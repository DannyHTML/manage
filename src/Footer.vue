<template>
  <div class="bg-secondary py-10 text-white">
    <div class="mb-8 flex justify-center gap-2 text-sm">
      <input
        class="rounded-full p-1 pl-4 text-black outline-none"
        type="email"
        name="email"
        id="email"
        placeholder="Updates in your inbox..."
      />
      <button
        class="rounded-full bg-primary px-5 py-2 text-white drop-shadow-xl"
      >
        GO
      </button>
    </div>
    <div class="mb-8 flex justify-around">
      <div>
        <div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Pricing</a></li>
            <li><a href="">Products</a></li>
            <li><a href="">About Us</a></li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <li><a href="">Careers</a></li>
          <li><a href="">Community</a></li>
          <li><a href="">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div>
      <div class="m-auto mb-5 flex max-w-md justify-around">
        <a target="_blank" href="https://www.facebook.com"
          ><img src="/images/icon-facebook.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.youtube.com"
          ><img src="/images/icon-youtube.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.twitter.com"
          ><img src="/images/icon-twitter.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.pinterest.com"
          ><img src="/images/icon-pinterest.svg" alt=""
        /></a>

        <a target="_blank" href="https://www.instagram.com"
          ><img src="/images/icon-instagram.svg" alt=""
        /></a>
      </div>
      <div class="flex justify-center">
        <img src="/images/logo-footer.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
