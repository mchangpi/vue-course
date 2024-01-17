<template>
  <div class="flex flex-col items-center gap-4">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
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
      <input v-model="counterData.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onBeforeMount,
} from "vue";

import { vAutofocus } from "@/directives/vAutofocus";

const appTitle = "My Counter App";
/*
  <h2 ref="appTitleRef">{{ appTitle }}</h2>
*/
const appTitleRef = ref(null);

onMounted(() => {
  console.log(
    appTitleRef.value,
    "is",
    appTitleRef.value.offsetWidth,
    "px wide"
  );
});

/* const counter = ref(0); const counterTitle = ref("My Counter"); */
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

watch(
  () => counterData.count,
  (count, prevCount) => {
    if (count === 10) alert("Way to go, You made it to 10");
  }
);

const decreaseCounter = async (amount = 1, event = {}) => {
  // console.log("event", event);
  counterData.count -= amount;
  await nextTick();
  console.log("Do something when updating(-) the counter DOM");
};

const increaseCounter = async (amount = 1, event = {}) => {
  // console.log("event", event);
  counterData.count += amount;
  await nextTick();
  console.log("Do something when updating(+) the counter DOM");
};

if (false) {
  onBeforeMount(() => {
    console.log("Home page: Before Mount");
  });

  onMounted(() => {
    console.log("Home page: Mounted");
  });

  onBeforeUnmount(() => {
    console.log("Home page: Before Unmount");
  });

  onUnmounted(() => {
    console.log("Home page: Unmounted");
  });

  onBeforeUpdate(() => {
    console.log("Home page: Before Update");
  });

  onUpdated(() => {
    console.log("Home page: Updated");
  });

  /*
  // App.vue
  <router-view v-slot="{ Component }"><keep-alive><component :is="Component" /> ...
  */
  onActivated(() => {
    console.log("Home page: onActivated");
  });

  onDeactivated(() => {
    console.log("Home page: onDeactivated");
  });
}
</script>

<!--
<script>
/* Vue 2: Option API */
export default {
  mounted() {
    console.log("Home Page: mounted");
  },
  unmounted() {
    console.log("Home Page: unmounted");
  },
};
</script>
-->
