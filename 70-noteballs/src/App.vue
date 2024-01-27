<template>
  <div>
    <NavBar />

    <div class="absolute top-14 -z-10 w-full px-2 py-2">
      <RouterView />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import NavBar from '@/components/layout/NavBar.vue';
import { useNoteStore } from '@/stores/noteStore';

const noteStore = useNoteStore();

onMounted(() => {
  noteStore.getNoteArr();
});
</script>

<!-- <style src="./style.css"></style> -->
