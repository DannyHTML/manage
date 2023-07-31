<template>
  <div v-for="item in data" :key="item.id">
    <div class="mb-10">
      <h3 class="mb-3 ml-4 rounded-l-full bg-bgShape py-0.5 font-bold">
        <span
          class="rounded-l-full rounded-r-full bg-primary px-3 py-1 text-white"
          >{{ item.Number }}</span
        ><span class="ml-4 text-sm">{{ item.Title }}</span>
      </h3>
      <p class="mx-4">{{ item.Description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  {
    id: 1,
    Number: "01",
    Title: "Track company-wide progress",
    Description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    Number: "02",
    Title: "Advanced built-in reports",
    Description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    Number: "03",
    Title: "Everything you need in one place",
    Description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];
</script>

<style scoped></style>
