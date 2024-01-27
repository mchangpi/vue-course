import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { db } from '@/js/firebase';

const initNoteArr = [
  /*
  { id: 1, content: 'note content 1' },
  { id: 2, content: 'note content 2' },
  */
];

export const useNoteStore = defineStore('note', () => {
  /* states */
  const noteToDeleteId = ref(-1);
  const noteArr = ref(initNoteArr);

  /* getters */
  const totalNoteCount = computed(() => noteArr.value.length);
  const totalCharCount = computed(() => {
    return noteArr.value.reduce((sum, note) => sum + note.content.length, 0);
  });

  /* actions */
  function addNote(newNote) {
    noteArr.value.unshift(newNote);
    // console.log(newNote, 'note array size', noteArr.value.length);
  }

  function setNoteToDeleteId(id) {
    noteToDeleteId.value = Number(id);
  }

  function deleteNote() {
    if (noteToDeleteId.value > 0) {
      noteArr.value = noteArr.value.filter(
        (note) => note.id !== Number(noteToDeleteId.value),
      );
    }
    noteToDeleteId.value = -1;
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

  function getNoteArr() {
    console.log('Get Notes');
  }

  return {
    noteArr,
    noteToDeleteId,
    totalNoteCount /* */,
    totalCharCount,
    getNoteArr /* */,
    addNote,
    setNoteToDeleteId,
    deleteNote,
    getNoteWithId,
    updateNote,
  };
});
