<template>
  <Teleport to=".modals-container">
    <div v-if="props.modelValue" class="z-10 bg-white">
      <h1 class="text-xl">{{ props.title }}</h1>

      <slot />

      <button @click="hanndleHideModelEvent" class="border-2 p-2">
        Hide modal
      </button>
      <div>Injected Username: {{ userData.username }}</div>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue';

/* 'v-model' pass modelValue prop from parent to child */
const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: 'No title specified' },
});

// console.log(props.modelValue, props.title);

const emit = defineEmits(['update:modelValue']);

/* trigger 'update:modelValue' event from child to parent */
const hanndleHideModelEvent = () => {
  emit('update:modelValue', false);
};

const userData = inject('userData');
</script>
