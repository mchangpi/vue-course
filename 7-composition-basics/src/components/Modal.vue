<template>
  <Teleport to=".modals-container">
    <div class="z-10 bg-slate-100">
      <h1><slot name="title" /></h1>
      <slot />

      <!-- <pre>{{ $slots.title() }}</pre> -->
    </div>
  </Teleport>
</template>

<script setup>
/*
import { useSlots } from 'vue';

const slots = useSlots();
console.log(slots.title());
*/
</script>
