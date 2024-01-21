import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const title = ref('Title (from Pinia Store)');

  /* getters */
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even';
    else return 'odd';
  });

  /* actions */
  function increaseCounter(step) {
    count.value += step;
  }
  function decreaseCounter(step) {
    count.value -= step;
  }

  return { count, title, oddOrEven, increaseCounter, decreaseCounter };
});
