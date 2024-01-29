<template>
  <!-- https://flowbite.com/docs/components/modal/#default-modal -->
  <!-- Main modal -->
  <div
    id="delete-modal"
    class="fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto backdrop-blur-md"
  >
    <div class="relative max-h-full w-full max-w-2xl p-4">
      <!-- Modal content -->
      <div class="relative rounded-lg bg-white shadow">
        <!-- Modal header -->
        <div
          class="flex items-center justify-between rounded-t border-b p-4 md:p-5"
        >
          <h3 class="text-xl font-semibold text-gray-900">Delete Note?</h3>
          <button
            type="button"
            @click="() => noteStore.setNoteToDeleteId(null)"
            class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            data-modal-hide="default-modal"
          >
            <svg
              class="h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <div class="space-y-4 p-4 md:p-5">
          <p class="text-base leading-relaxed text-gray-500">
            Are you sure you want to delete this Note?
          </p>
          <p>{{ noteToDelete.content }}</p>
        </div>
        <!-- Modal footer -->
        <div
          class="flex items-center justify-end gap-4 rounded-b border-t border-gray-200 p-4 md:p-5"
        >
          <button
            @click="() => noteStore.setNoteToDeleteId(null)"
            data-modal-hide="default-modal"
            type="button"
            class="ms-3 w-1/3 rounded-lg border border-gray-200 bg-gray-100 px-5 py-2.5 text-sm font-medium text-slate-600 hover:bg-gray-200 hover:text-slate-800 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Cancel
          </button>
          <button
            @click="() => noteStore.deleteNote()"
            data-modal-hide="default-modal"
            type="button"
            class="w-1/3 rounded-lg bg-rose-200 px-5 py-2.5 text-center text-sm font-medium text-slate-800 hover:bg-rose-400 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useNoteStore } from '@/stores/noteStore';
const noteStore = useNoteStore();

const noteToDelete = noteStore.getNoteWithId(noteStore.noteToDeleteId);

const handleEscapeKeyUpEvent = (e) => {
  // console.log('NoteDeleteModal mounted', e.key);
  if (e.key.toLocaleLowerCase() === 'escape') {
    noteStore.setNoteToDeleteId(null);
  }
};

onMounted(() => {
  document.addEventListener('keyup', handleEscapeKeyUpEvent);
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleEscapeKeyUpEvent);
});
</script>
