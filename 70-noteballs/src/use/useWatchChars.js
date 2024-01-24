import { watch } from 'vue';

export const MAX_NOTE_LENGTH = 100;

export function useWatchChars(valueToWatch, maxChars = MAX_NOTE_LENGTH) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === maxChars)
      alert(`note content length exceeds ${maxChars}!`);
  });
}
