<template>
  <Teleport to=".modals-container">
    <div v-if="props.modelValue" class="z-10 bg-slate-500 text-cyan-50">
      <!-- <h1 class="text-xl">{{ props.title }}</h1> -->
      <h1 class="text-xl">Dark Modal</h1>

      <slot />

      <button @click="hanndleHideModelEvent" class="border-2 p-2">
        Hide modal
      </button>
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

const emit = defineEmits(['update:modelValue']);

const hanndleHideModelEvent = () => {
  emit('update:modelValue', false);
};
</script>
