<template>
  <Teleport to=".modals-container">
    <div v-if="props.modelValue" class="z-10 bg-slate-100">
      <h1 class="text-xl">{{ props.title }}</h1>

      <slot />

      <button @click="hanndleHideModelEvent" class="border-2 p-2">
        Hide modal
      </button>

      <!-- <pre>{{ $slots.title() }}</pre> -->
    </div>
  </Teleport>
</template>

<script setup>
/* 'modelValue' prop is passed from parent to child with 'v-model' */
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'No title specified' },
});

console.log(props.modelValue, props.title);

const hideModelEvent = 'hideModal';

const emit = defineEmits([hideModelEvent]);

const hanndleHideModelEvent = () => {
  emit(hideModelEvent);
};

/*
import { useSlots } from 'vue';

const slots = useSlots();
console.log(slots.title());
*/
</script>
