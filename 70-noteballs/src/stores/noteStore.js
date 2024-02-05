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

import { useAuthStore } from '@/stores/authStore';

const initNoteArr = [
  /*
  { id: '1', content: 'note content 1' },
  { id: '2', content: 'note content 2' },
  */
];

let notesCollectionRef = {};

let notesCollectionQuery = {};

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
  const getNoteArr = () => {
    loadingProgress.value = 1;
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
  };

  const init = () => {
    const authStore = useAuthStore();
    notesCollectionRef = collection(
      db,
      'users',
      authStore.currentUser.id,
      'notes',
    );
    notesCollectionQuery = query(
      notesCollectionRef,
      orderBy('date', 'desc'),
      /* limit(100), */
    );
    getNoteArr();
  };

  const addNote = async (newNote) => {
    // console.log(newNote);
    await addDoc(notesCollectionRef, newNote);
  };

  const setNoteToDeleteId = (id) => {
    noteToDeleteId.value = id?.toString();
  };

  const deleteNote = async () => {
    // console.log('deleteNote id', noteToDeleteId.value);
    if (noteToDeleteId.value) {
      /* noteArr.value = noteArr.value.filter(
        (note) => note.id !== noteToDeleteId.value.toString(),
      );*/
      await deleteDoc(doc(notesCollectionRef, noteToDeleteId.value));
    }
    noteToDeleteId.value = null;
  };

  const getNoteWithId = (id) => {
    const foundNote = noteArr.value.find((note) => note.id === id?.toString());
    return foundNote || {};
  };

  const updateNote = async (editedNote) => {
    await updateDoc(doc(notesCollectionRef, editedNote.id), {
      content: editedNote.content,
    });
  };

  return {
    noteArr,
    noteToDeleteId,
    loadingProgress,
    totalNoteCount /* */,
    totalCharCount,
    init,
    getNoteArr /* */,
    addNote,
    setNoteToDeleteId,
    deleteNote,
    getNoteWithId,
    updateNote,
  };
});
