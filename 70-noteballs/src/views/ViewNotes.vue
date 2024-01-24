<template>
  <AddEditNote v-model="newNoteContent" ref="addEditNoteRef">
    <template v-slot:buttons>
      <button
        type="submit"
        @click="handleAddNote"
        v-bind:disabled="!newNoteContent.trim()"
        class="m-2 w-1/2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
      >
        Add Note
      </button>
    </template>
  </AddEditNote>

  <hr class="m-4 border-2 border-dotted" />

  <Note v-for="note of noteStore.noteArr" :key="note.id" v-bind:note="note" />
  <!-- v-on:deleteNote="(id) => noteStore.deleteNoteWithId(id)" -->
</template>

<script setup>
import { ref } from 'vue';
import Note from '@/components/notes/Note.vue';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useNoteStore } from '@/stores/note';

const newNoteContent = ref('');
const addEditNoteRef = ref(null);

const noteStore = useNoteStore();

const handleAddNote = () => {
  const newNote = {
    id: new Date().getTime(),
    content: newNoteContent.value,
  };
  // console.log(newNote);
  noteStore.addNote(newNote);

  newNoteContent.value = '';
  addEditNoteRef.value.focusTextarea();
};
</script>

<!-- https://flowbite.com/docs/components/forms/#default-form -->
<!--
  <form
    class="z-0 mx-auto mb-2 flex max-w-5xl flex-col items-end rounded-md bg-cyan-300 p-4"
  >
    <div class="mb-2 w-full">
      <label class="mb-2 block text-lg font-medium text-gray-900"
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
  </form>-->
