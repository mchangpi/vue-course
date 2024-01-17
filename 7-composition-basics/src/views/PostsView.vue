<template>
  <div class="posts flex flex-col items-center">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const posts = ref([
  { id: "1", title: "Post item 1" },
  { id: "2", title: "Post item 2" },
  { id: "3", title: "Post item 3" },
]);
</script>
