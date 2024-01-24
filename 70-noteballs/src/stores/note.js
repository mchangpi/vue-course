import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useNoteStore = defineStore('note', () => {
  const initNoteArr = [
    { id: 1, content: 'note content 1' },
    { id: 2, content: 'note content 2' },
  ];

  const noteArr = ref(initNoteArr);

  /* // getters
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even';
    else return 'odd';
  });
  */

  /* actions */
  function addNote(newNote) {
    noteArr.value.unshift(newNote);
    console.log(newNote, 'note array size', noteArr.value.length);
  }

  return { noteArr, addNote };
});
