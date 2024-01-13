<template>
  <div class="home">
    <div>
      <button @click="decreaseCounter">-</button>
      <span class="counter">{{ counter }}</span>
      <button @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);
    const decreaseCounter = () => {
      counter.value--;
    };

    const increaseCounter = () => {
      counter.value++;
    };

    return {
      counter,
      decreaseCounter,
      increaseCounter,
    };
  },
};
</script>
