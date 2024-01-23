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

  /* 
  // actions
  function increaseCounter(step) {
    count.value += step;
  }
  function decreaseCounter(step) {
    count.value -= step;
  }*/

  return { noteArr };
});
