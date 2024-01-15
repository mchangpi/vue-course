<template>
  <div class="flex flex-col items-center gap-4">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div class="mt-2 space-x-2 flex justify-center">
      <button @click="decreaseCounter(2, $event)" class="border-2 px-4">
        --
      </button>
      <button @click="decreaseCounter(1, $event)" class="border-2 px-4">
        -
      </button>
      <!-- <span class="counter">{{ counter }}</span> -->
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="border-2 px-4">
        +
      </button>
      <button @click="increaseCounter(2, $event)" class="border-2 px-4">
        ++
      </button>
    </div>
    <p>The counter is (computed) {{ oddOrEven }}</p>
    <div class="edit">
      <h2>Edit Counter Title:</h2>
      <!-- <input v-model="counterTitle" type="text" /> -->
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
/*
const counter = ref(0);
const counterTitle = ref("My Counter");
*/

import { reactive, computed } from "vue";

const appTitle = "My Counter App";

const counterData = reactive({
  count: 0,
  title: "My Counter",
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
});

const decreaseCounter = (amount = 1, event = {}) => {
  // counter.value--;
  // console.log("event", event);
  counterData.count -= amount;
};

const increaseCounter = (amount = 1, event = {}) => {
  // counter.value++;
  // console.log("event", event);
  counterData.count += amount;
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
