<template>
  <!-- https://flowbite.com/docs/components/card/#user-profile-card -->
  <div
    class="mx-auto my-2 flex w-full max-w-4xl flex-col items-start rounded-lg border border-gray-200 bg-white p-4 shadow"
  >
    <!-- <h5 class="mb-1 text-xl font-medium text-gray-900">Title</h5> -->
    <div class="text-xl text-gray-800">
      {{ note.content }}
    </div>
    <div class="w-full text-right text-gray-400">
      <small>{{ contentLength }} </small>
    </div>
    <div class="mt-4 flex w-full justify-around md:mt-6">
      <RouterLink
        :to="`/edit/${note.id}`"
        href="#"
        class="w-[45%] items-center rounded-lg bg-sky-300 px-4 py-2 text-center text-sm font-medium text-white hover:bg-sky-500 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >Edit</RouterLink
      >
      <a
        @click.prevent="() => noteStore.setNoteToDeleteId(note.id)"
        href="#"
        class="ms-2 w-[45%] items-center rounded-lg border border-gray-300 bg-rose-200 px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-rose-400 focus:outline-none focus:ring-4 focus:ring-gray-200"
        >Delete</a
      >
    </div>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useNoteStore } from '@/stores/noteStore';

const { note } = defineProps({
  note: { type: Object, required: true },
});

const noteStore = useNoteStore();

const contentLength = computed(() => {
  const length = note.content.length;

  if (length > 1) return length + ' chars';
  else return length + ' char';
});

/* const modals = reactive({
  isDeleteNote: true,
}); */
</script>
