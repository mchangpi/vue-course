import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { db } from '@/js/firebase';
import { collection, doc, setDoc, onSnapshot } from 'firebase/firestore';

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
  async function getNoteArr() {
    onSnapshot(collection(db, 'notes'), (querySnapshot) => {
      const newNoteArr = [];
      querySnapshot.forEach((note) => {
        newNoteArr.push({ id: note.id, content: note.data().content });
      });
      noteArr.value = newNoteArr.sort(
        /* sort noteA before noteB if return value < 0 */
        (noteA, noteB) => Number(noteB.id) - Number(noteA.id),
      );
    });
  }

  async function addNote(newNote) {
    await setDoc(
      doc(db, 'notes', newNote.id),
      newNote,
    ); /* add note to firebase */
  }

  function setNoteToDeleteId(id) {
    noteToDeleteId.value = id.toString();
  }

  function deleteNote() {
    if (noteToDeleteId.value > 0) {
      noteArr.value = noteArr.value.filter(
        (note) => note.id !== noteToDeleteId.value.toString(),
      );
    }
    noteToDeleteId.value = -1;
  }

  function getNoteWithId(id) {
    const foundNote = noteArr.value.find((note) => note.id === id.toString());
    return foundNote || {};
  }

  function updateNote(editedNote) {
    // console.log(editedNote);
    noteArr.value = noteArr.value.map((note) => {
      if (note.id === editedNote.id.toString()) {
        return { id: note.id, content: editedNote.content };
      } else {
        return note;
      }
    });
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
