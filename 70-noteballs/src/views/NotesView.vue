<template>
  <!-- 1) v-slot:buttons 2) v-model 3) ref -->
  <NoteAddEditForm
    v-model="newNoteContent"
    ref="noteAddEditRef"
    bgClass="bg-cyan-300"
  >
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
  </NoteAddEditForm>

  <hr class="m-4 border-2 border-dotted" />

  <Note v-for="note of noteStore.noteArr" :key="note.id" :note="note" />
  <div ref="noteDeleteModalRef">
    <NoteDeleteModal v-if="noteStore.noteToDeleteId" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { onClickOutside } from '@vueuse/core';
import Note from '@/components/notes/Note.vue';
import NoteAddEditForm from '@/components/notes/NoteAddEditForm.vue';
import NoteDeleteModal from '@/components/notes/NoteDeleteModal.vue';
import { useNoteStore } from '@/stores/noteStore';
import { useWatchChars } from '@/use/useWatchChars';

const newNoteContent = ref('');
const noteAddEditRef = ref(null);
const noteDeleteModalRef = ref(null);

const noteStore = useNoteStore();

const handleAddNote = () => {
  const newNote = {
    date: new Date().getTime().toString(),
    content: newNoteContent.value,
  };
  // console.log(newNote);
  noteStore.addNote(newNote);

  newNoteContent.value = '';
  noteAddEditRef.value.focusTextarea();
};

/*
watch(
  () => noteStore.deleteNoteId,
  (Id, prevId) => {
    console.log('delete note idx', Id, '(old idx:', prevId, ')');
  },
);*/

useWatchChars(newNoteContent, 40);

onClickOutside(noteDeleteModalRef, (event) => {
  // console.log('onClickOutside (x,y)=', event.screenX, event.screenY);
  noteStore.setNoteToDeleteId(null);
});
</script>
