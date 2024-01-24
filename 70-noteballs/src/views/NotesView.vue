<template>
  <!-- 1) v-slot:buttons 2) v-model 3) ref -->
  <AddEditNote v-model="newNoteContent" ref="addEditNoteRef">
    <template v-slot:buttons>
      <button
        type="submit"
        @click="handleAddNote"
        v-bind:disabled="!newNoteContent.trim()"
        class="m-2 w-1/2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
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
import { useNoteStore } from '@/stores/noteStore';

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
