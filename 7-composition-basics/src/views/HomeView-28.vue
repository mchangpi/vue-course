<template>
  <div class="flex flex-col items-center gap-4">
    <h2>{{ appTitle }}</h2>
    <h3>{{ counterData.title }}</h3>
    <div class="mt-2 flex justify-center space-x-2">
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
      <input v-model="counterData.title" type="text" />
    </div>
  </div>
</template>

<script setup>
import { reactive, computed, watch, onMounted } from 'vue';

const appTitle = 'My Counter App';

onMounted(() => {
  console.log('Don stuff related to App Title');
});

const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

const oddOrEven = computed(() => {
  if (counterData.count % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});

watch(
  () => counterData.count,
  (count, prevCount) => {
    if (count === 10) alert('Way to go, You made it to 10');
  },
);

const decreaseCounter = (amount = 1, event = {}) => {
  // console.log("event", event);
  counterData.count -= amount;
};

const increaseCounter = (amount = 1, event = {}) => {
  // console.log("event", event);
  counterData.count += amount;
};

onMounted(() => {
  console.log('Don stuff related to Counter');
});
</script>

<!-- Hooks examples: 
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
// <router-view v-slot="{ Component }"><keep-alive><component :is="Component" /> ...
*/
onActivated(() => {
  console.log("Home page: onActivated");
});

onDeactivated(() => {
  console.log("Home page: onDeactivated");
});
-->

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
