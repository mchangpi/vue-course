import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { db } from '@/js/firebase';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  documentId,
  limit,
} from 'firebase/firestore';

const initNoteArr = [
  /*
  { id: '1', content: 'note content 1' },
  { id: '2', content: 'note content 2' },
  */
];

const notesCollectionRef = collection(db, 'notes');

const notesCollectionQuery = query(
  notesCollectionRef,
  orderBy(documentId(), 'desc'),
  /* limit(100), */
);

export const useNoteStore = defineStore('note', () => {
  /* states */
  const noteToDeleteId = ref(null);
  const noteArr = ref(initNoteArr);

  /* getters */
  const totalNoteCount = computed(() => noteArr.value.length);
  const totalCharCount = computed(() => {
    return noteArr.value.reduce((sum, note) => sum + note.content.length, 0);
  });

  /* actions */
  async function getNoteArr() {
    onSnapshot(notesCollectionQuery, (querySnapshot) => {
      const newNoteArr = [];
      querySnapshot.forEach((note) => {
        newNoteArr.push({ id: note.id, content: note.data().content });
      });
      noteArr.value = newNoteArr;
      /* noteArr.value = newNoteArr.sort(
        // sort noteA before noteB if return value < 0 
        (noteA, noteB) => Number(noteB.id) - Number(noteA.id),
      ); */
    });
  }

  async function addNote(newNote) {
    await setDoc(
      doc(notesCollectionRef, newNote.id),
      newNote,
    ); /* add note to firebase */
  }

  function setNoteToDeleteId(id) {
    noteToDeleteId.value = id;
  }

  async function deleteNote() {
    // console.log('deleteNote id', noteToDeleteId.value);
    if (noteToDeleteId.value) {
      /* noteArr.value = noteArr.value.filter(
        (note) => note.id !== noteToDeleteId.value.toString(),
      );*/
      await deleteDoc(doc(notesCollectionRef, noteToDeleteId.value));
    }
    noteToDeleteId.value = null;
  }

  function getNoteWithId(id) {
    const foundNote = noteArr.value.find((note) => note.id === id.toString());
    return foundNote || {};
  }

  async function updateNote(editedNote) {
    await updateDoc(doc(notesCollectionRef, editedNote.id), {
      content: editedNote.content,
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
