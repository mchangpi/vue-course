<template>
  <div class="posts flex flex-col items-center space-y-2">
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${post.id}`">{{ post.title }}</RouterLink>
      </li>
    </ul>

    <div>
      <button
        v-on:click="() => counter.increaseCounter(1)"
        v-bind:class="[
          counter.oddOrEven === 'odd' ? 'bg-yellow-200' : 'bg-pink-200',
        ]"
        class="border-2 border-black p-2 text-4xl text-black"
      >
        {{ counter.title + ': ' + counter.count }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCounterStore } from '@/stores/counter';

const counter = useCounterStore();

const posts = ref([
  { id: '1', title: 'Post item 1' },
  { id: '2', title: 'Post item 2' },
  { id: '3', title: 'Post item 3' },
]);
</script>
