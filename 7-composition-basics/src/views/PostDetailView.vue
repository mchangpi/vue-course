<template>
  <div class="post-detail flex flex-col items-center m-4">
    <h1>Post Detail</h1>
    <p>Post ID: {{ $route.params.id }}</p>
    <div>
      <button @click="showPostId" class="border p-2">Show Post ID</button>
    </div>
    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const showPostId = () => {
  alert(`Show Post ID: ${route.params.id}`);
};
</script>
