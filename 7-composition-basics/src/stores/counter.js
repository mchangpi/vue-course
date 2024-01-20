import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const title = ref('Milton Counter Title');

  /* const doubleCount = computed(() => count.value * 2) */
  /*
  function increment() {
    count.value++;
  }*/

  /* 
  // https://pinia.vuejs.org/cookbook/hot-module-replacement.html
  if (import.meta.hot) {
    import.meta.hot.accept(acceptHMRUpdate[(useCounterStore, import.meta.hot)]);
  }
  */
  return { count, title };
});
