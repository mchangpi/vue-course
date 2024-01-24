import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', () => {
  const initNoteArr = [
    { id: 1, content: 'note content 1' },
    { id: 2, content: 'note content 2' },
  ];

  const noteArr = ref(initNoteArr);

  /* actions */
  function addNote(newNote) {
    noteArr.value.unshift(newNote);
    // console.log(newNote, 'note array size', noteArr.value.length);
  }

  function deleteNoteWithId(id) {
    noteArr.value = noteArr.value.filter((note) => note.id !== Number(id));
  }

  function getNoteWithId(id) {
    const foundNote = noteArr.value.find((note) => note.id === Number(id));
    return foundNote || {};
  }

  function updateNote(editedNote) {
    // console.log(editedNote);
    noteArr.value = noteArr.value.map((note) => {
      if (note.id === Number(editedNote.id)) {
        return { id: note.id, content: editedNote.content };
      } else {
        return note;
      }
    });
  }

  return { noteArr, addNote, deleteNoteWithId, getNoteWithId, updateNote };
});
