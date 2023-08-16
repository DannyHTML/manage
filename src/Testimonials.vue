<template>
  <div class="m-auto w-full max-w-sm">
    <div class="mb-24 text-center">
      <h2 class="text-3xl font-bold">What they've said</h2>
    </div>
    <div
      v-for="(item, index) in comments"
      :key="item.id"
      v-show="index === selectedCommentIndex"
      class="relative mx-5 mb-20 flex max-w-sm bg-bgTestimonial p-3 text-center"
    >
      <div>
        <div
          class="absolute left-1/2 top-0 w-20 -translate-x-1/2 -translate-y-1/2"
        >
          <img :src="item.image" alt="Profile pic" />
        </div>
        <h3 class="mb-6 pt-14 text-lg font-bold capitalize">
          {{ item.title }}
        </h3>
        <p class="">{{ item.description }}</p>
      </div>
    </div>
    <div class="mb-10 flex justify-center gap-2">
      <input
        v-for="(item, index) in comments"
        :key="index"
        @click="selectComment(index)"
        type="radio"
        name="comment"
        :id="item.title"
        :checked="index === selectedCommentIndex"
      />
    </div>
    <div class="mb-20 text-center">
      <Button />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Button from "./components/Button.vue";

interface comments {
  id: number;
  image: string;
  title: string;
  description: string;
}

const comments = [
  {
    id: 1,
    image: "./images/avatar-ali.png",
    title: "ali bravo",
    description:
      "' We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused. '",
  },
  {
    id: 2,
    image: "./images/avatar-anisha.png",
    title: "anisha li",
    description:
      "' Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated. '",
  },
  {
    id: 3,
    image: "./images/avatar-richard.png",
    title: "richard watts",
    description:
      "' Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to! '",
  },
  {
    id: 4,
    image: "./images/avatar-shanai.png",
    title: "shanai gough",
    description:
      "' Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive. '",
  },
];

const selectedCommentIndex = ref<number>(0);

const selectComment = (index: number) => {
  console.log("Selected comment index:", index);
  selectedCommentIndex.value = index;
};
</script>

<style scoped></style>
