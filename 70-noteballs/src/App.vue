<template>
  <NavBar />

  <div class="container px-2 py-4">
    <RouterView class="absolute left-[20px] top-[100px]" />
  </div>
</template>

<script setup>
import NavBar from '@/components/layout/NavBar.vue';
</script>

<!-- <style src="./style.css"></style> -->
