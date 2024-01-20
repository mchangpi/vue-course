<template>
  <div class="post-detail m-4 flex flex-col items-center">
    <h1>Post Detail</h1>
    <p>Post {{ $route.params.id }}: {{ postTitle }}</p>
    <div>
      <button @click="showPostId" class="border p-2">Show Post ID</button>
    </div>
    <div>
      <button @click="() => goHomeInSeconds(3)" class="border p-2">
        Go Home Page in 3 seconds
      </button>
    </div>

    <div>
      <button @click="() => goToPage(1)" class="border p-2">
        Go to first Page
      </button>
    </div>

    <p>
      <RouterLink to="/posts">&lt; Back</RouterLink>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const postTitle = ref('Title: ');

const showPostId = () => {
  alert(`Show Post ID: ${route.params.id} with useRoute()`);
};

const goHomeInSeconds = (sec) => {
  postTitle.value += `Go Home Page in ${sec} seconds`;
  setTimeout(() => {
    // router.push("/");
    router.push({ name: 'home' });
  }, sec * 1000);
};

const goToPage = (pageNumber) => {
  postTitle.value += `Go to Page: ${pageNumber}`;
  router.push({ name: 'postDetail', params: { id: pageNumber } });
};
</script>
