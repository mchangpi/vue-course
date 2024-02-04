<template>
  <!-- https://flowbite.com/docs/components/forms/#default-form -->
  <form
    class="z-0 mx-auto mb-2 flex max-w-4xl flex-col items-end rounded-md p-4"
    :class="bgColor"
  >
    <div class="mb-2 w-full">
      <label class="mb-2 block text-lg font-medium text-gray-900"
        >Please {{ title }}
      </label>
      <textarea
        v-model="modelProps"
        ref="textareaRef"
        required
        placeholder="Add a new note"
        :maxlength="MAX_NOTE_LENGTH"
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-base text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        v-autofocus
      />
    </div>
    <slot name="buttons" />
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { vAutofocus } from '@/directives/vAutofocus';
import { MAX_NOTE_LENGTH } from '@/use/useWatchChars';

const modelProps = defineModel({ type: String });
const { bgColor } = defineProps({
  bgColor: { type: String, default: 'bg-cyan-300' },
});

const title = modelProps.value.trim().length > 0 ? 'edit note' : 'add note';

const textareaRef = ref(null);

const focusTextarea = () => {
  // console.log('focusTextarea called');
  textareaRef.value.focus();
};

defineExpose({
  focusTextarea,
});
</script>
