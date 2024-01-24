<template>
  <!-- <div>Edit Note with Id: {{ $route.params.id }}</div> -->

  <!-- 1) v-slot:buttons 2) v-model 3) ref -->
  <AddEditNote v-model="noteContent">
    <template v-slot:buttons>
      <div class="flex w-full justify-end">
        <button
          @click="$router.push({ name: 'notes' })"
          class="m-2 w-1/2 rounded-lg bg-slate-300 px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Cancel
        </button>
        <button
          type="submit"
          @click="handleEditNote"
          v-bind:disabled="!noteContent.trim()"
          class="m-2 w-1/2 rounded-lg bg-cyan-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Save Note
        </button>
      </div>
    </template>
  </AddEditNote>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import AddEditNote from '@/components/notes/AddEditNote.vue';
import { useNoteStore } from '@/stores/note';

const { params } = useRoute();
const router = useRouter();
const noteStore = useNoteStore();
const initialNote = noteStore.getNoteWithId(params.id);

const noteContent = ref(initialNote.content || '');

const handleEditNote = () => {
  const editedNote = {
    id: params.id,
    content: noteContent.value,
  };
  // console.log(editedNote);
  noteStore.updateNote(editedNote);

  router.push({ name: 'notes', params: {} });
  // noteContent.value = '';
  // addEditNoteRef.value.focusTextarea();
};

/* const handleCancel = () => {
  router.push({ name: 'notes', params: {} });
}; */
</script>
