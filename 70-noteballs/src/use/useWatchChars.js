import { watch } from 'vue';

export const MAX_NOTE_LENGTH = 50;

export function useWatchChars(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    if (newValue.length === MAX_NOTE_LENGTH)
      alert(`note content length exceeds ${MAX_NOTE_LENGTH}!`);
  });
}
