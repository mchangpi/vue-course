<template>
  <!-- https://flowbite.com/docs/components/card/#user-profile-card -->
  <div
    class="mx-auto my-2 max-w-5xl rounded-lg border border-gray-200 bg-white shadow"
  >
    <div class="flex flex-col items-start p-4">
      <!-- <h5 class="mb-1 text-xl font-medium text-gray-900">Title</h5> -->
      <div class="text-xl text-gray-800">
        {{ note.content }}
      </div>
      <div class="w-full text-right text-gray-400">
        <small>{{ contentLength }} </small>
      </div>
      <div class="mt-4 flex w-full md:mt-6">
        <RouterLink
          :to="`/edit/${note.id}`"
          href="#"
          class="w-1/2 items-center rounded-lg bg-sky-300 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >Edit</RouterLink
        >
        <a
          @click.prevent="() => noteStore.deleteNoteWithId(note.id)"
          href="#"
          class="ms-2 w-1/2 items-center rounded-lg border border-gray-300 bg-rose-300 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >Delete</a
        >
        <!-- @click.prevent="$emit('deleteNote', note.id)" -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useNoteStore } from '@/stores/note';

const { note } = defineProps({
  note: { type: Object, required: true },
});
// const emit = defineEmits(['deleteNote']);

const noteStore = useNoteStore();

const contentLength = computed(() => {
  const length = note.content.length;

  if (length > 1) return length + ' chars';
  else return length + ' char';
});
</script>
