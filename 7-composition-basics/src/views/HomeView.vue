<template>
  <div class="flex flex-col items-center gap-4">
    <h3>{{ counterData.title }}</h3>
    <div class="mt-2 space-x-2 flex justify-center">
      <button @click="decreaseCounter" class="border-2 px-4">-</button>
      <!-- <span class="counter">{{ counter }}</span> -->
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter" class="border-2 px-4">+</button>
    </div>
    <div class="edit">
      <h2>Edit Counter Title:</h2>
      <!-- <input v-model="counterTitle" type="text" /> -->
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
/*
const counter = ref(0);
const counterTitle = ref("My Counter");
*/
const counterData = reactive({
  count: 0,
  title: "My Counter",
});

const decreaseCounter = () => {
  // counter.value--;
  counterData.count--;
};

const increaseCounter = () => {
  // counter.value++;
  counterData.count++;
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
