import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const title = ref('Title (from Pinia Store)');

  /* const doubleCount = computed(() => count.value * 2) */

  function increaseCounter(step) {
    count.value += step;
  }
  function decreaseCounter(step) {
    count.value -= step;
  }
  return { count, title, increaseCounter, decreaseCounter };
});
