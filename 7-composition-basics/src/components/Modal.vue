<template>
  <Teleport to=".modals-container">
    <div class="z-10 bg-slate-100">
      <!-- <h1><slot name="title" /></h1> -->
      <h1 class="text-xl">{{ props.title }}</h1>
      <slot />

      <!-- <button @click="$emit('hideModal')" class="border-2 p-2"> -->
      <button @click="hanndleHideModelEvent" class="border-2 p-2">
        Hide modal
      </button>

      <!-- <pre>{{ $slots.title() }}</pre> -->
    </div>
  </Teleport>
</template>

<script setup>
const props = defineProps({
  title: String,
  default: 'No title specified',
});

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
