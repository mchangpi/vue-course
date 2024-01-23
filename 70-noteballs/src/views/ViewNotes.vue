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
      class="m-2 w-1/2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Add Note
    </button>
  </form>

  <hr class="m-4 border-2 border-dotted" />

  <Note
    v-for="note of noteArr"
    :key="note.id"
    v-bind:note="note"
    v-on:deleteNote="handleDeleteNote"
  />
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';

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

const handleDeleteNote = (id) => {
  console.log('del note id', id);
  noteArr.value = noteArr.value.filter((note) => note.id !== id);
};
</script>
