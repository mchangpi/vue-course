<template>
  <!-- https://flowbite.com/docs/components/forms/#default-form -->
  <form
    class="z-0 mx-auto mb-2 flex max-w-5xl flex-col items-end rounded-md bg-cyan-300 p-4"
  >
    <div class="mb-2 w-full">
      <label for="email" class="mb-2 block text-lg font-medium text-gray-900"
        >New Note</label
      >
      <textarea
        ref="newNoteRef"
        v-model="newNoteContent"
        placeholder="Add a new note"
        required
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
      />
    </div>
    <button
      type="submit"
      @click="handleAddNote"
      v-bind:disabled="!newNoteContent.trim()"
      class="m-2 w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Add Note
    </button>
  </form>

  <hr class="m-4 border-2 border-dotted" />

  <!-- https://flowbite.com/docs/components/card/#user-profile-card -->
  <div
    v-for="note of noteArr"
    class="mx-auto my-2 max-w-5xl rounded-lg border border-gray-200 bg-white shadow"
  >
    <div class="flex flex-col items-start p-4">
      <!-- <h5 class="mb-1 text-xl font-medium text-gray-900">Title</h5> -->
      <span class="text-xl text-gray-500">{{ note.content }}</span>
      <div class="mt-4 flex w-full md:mt-6">
        <a
          href="#"
          class="w-1/2 items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >Edit</a
        >
        <a
          href="#"
          class="ms-2 w-1/2 items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >Delete</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const initNoteArr = [
  { id: 1, content: 'note content 1' },
  { id: 2, content: 'note content 2' },
];

const noteArr = ref(initNoteArr);
const newNoteRef = ref(null);
const newNoteContent = ref('');

const handleAddNote = () => {
  const newNote = {
    id: new Date().getTime(),
    content: newNoteContent.value,
  };
  noteArr.value.unshift(newNote);

  newNoteContent.value = '';
  newNoteRef.value.focus();
};
</script>
