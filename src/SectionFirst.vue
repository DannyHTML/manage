<template>
  <div class="flex justify-center">
    <div class="flex max-w-xs flex-col items-center justify-center">
      <div>
        <h1 class="mb-4 text-center text-3xl font-bold">
          Bring everyone together to build better products.
        </h1>
      </div>
      <div class="mx-auto mb-6 w-64">
        <div>
          <p class="text-sm">
            <span class="pl-1">Manage</span> makes it simple for software teams
            to plan day-to-day tasks while keeping the larger team goals in
            view.
          </p>
        </div>
      </div>
      <div class="">
        <Button />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from "./components/Button.vue";
</script>

<style scoped></style>
