<template>
  <div class="flex flex-col items-center">
    <h3>{{ counterTitle }}:</h3>
    <div class="mt-2 space-x-2 flex justify-center">
      <button @click="decreaseCounter" class="border-2 px-4">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter" class="border-2 px-4">+</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const counter = ref(0);
const counterTitle = ref("My Counter");

const decreaseCounter = () => {
  counter.value--;
};

const increaseCounter = () => {
  counter.value++;
};
</script>

<!-- 
<script>
import { ref } from "vue";

export default {
  setup() {

    return {
      counter,
      decreaseCounter,
      increaseCounter,
    };
  },
};
</script>
-->
