<template>
  <NavBar />

  <div class="absolute top-20 -z-10 w-full px-2 py-2">
    <RouterView />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
</script>

<!-- <style src="./style.css"></style> -->
