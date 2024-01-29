import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { db } from '@/js/firebase';
import {
  collection,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
} from 'firebase/firestore';
import fa from 'faker/lib/locales/fa';

const initNoteArr = [
  /*
  { id: '1', content: 'note content 1' },
  { id: '2', content: 'note content 2' },
  */
];

const notesCollectionRef = collection(db, 'notes');

const notesCollectionQuery = query(
  notesCollectionRef,
  orderBy('date', 'desc'),
  /* limit(100), */
);

export const useNoteStore = defineStore('note', () => {
  /* states */
  const noteToDeleteId = ref(null);
  const noteArr = ref(initNoteArr);
  const loadingProgress = ref(0);

  /* getters */
  const totalNoteCount = computed(() => noteArr.value.length);
  const totalCharCount = computed(() => {
    return noteArr.value.reduce((sum, note) => sum + note.content.length, 0);
  });

  /* actions */
  function getNoteArr() {
    loadingProgress.value = 0;
    const progressInterval = setInterval(() => {
      loadingProgress.value += 10;
      // console.log(loadingProgress.value);
    }, 200);

    onSnapshot(notesCollectionQuery, (querySnapshot) => {
      const newNoteArr = [];
      querySnapshot.forEach((doc) => {
        const { date, content } = doc.data();
        newNoteArr.push({ id: doc.id, date, content });
      });
      noteArr.value = newNoteArr;
      loadingProgress.value = 0;
      clearInterval(progressInterval);
    });
  }

  async function addNote(newNote) {
    // console.log(newNote);
    await addDoc(notesCollectionRef, newNote);
  }

  function setNoteToDeleteId(id) {
    noteToDeleteId.value = id?.toString();
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
    const foundNote = noteArr.value.find((note) => note.id === id?.toString());
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
    loadingProgress,
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
