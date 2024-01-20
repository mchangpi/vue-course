<template>
  <div class="flex flex-col items-center gap-4">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
    <h3>{{ counter.title }}</h3>
    <div class="mt-2 flex justify-center space-x-2">
      <button @click="() => {}" class="border-2 px-4">--</button>
      <button @click="() => {}" class="border-2 px-4">-</button>
      <span>{{ counter.count }}</span>
      <button @click="() => {}" class="border-2 px-4">+</button>
      <button @click="() => {}" class="border-2 px-4">++</button>
    </div>
    <p>The counter is (computed) odd/even</p>
    <div>
      <h2>Edit Counter Title:</h2>
      <input v-model="counter.title" type="text" v-autofocus />
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  onMounted,
  onUnmounted,
  onActivated,
  onDeactivated,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onBeforeMount,
} from 'vue';
import { useCounterStore } from '@/stores/counter';
import { vAutofocus } from '@/directives/vAutofocus';

const counter = useCounterStore();

const appTitle = 'My Counter App';

const appTitleRef = ref(null);

onMounted(() => {
  console.log(
    appTitleRef.value + ' is ' + appTitleRef.value.offsetWidth + ' px wide',
  );
});

if (false) {
  testLifeCycleHooks();
}

function testLifeCycleHooks() {
  onBeforeMount(() => {
    console.log('Home page: Before Mount');
  });

  onMounted(() => {
    console.log('Home page: Mounted');
  });

  onBeforeUnmount(() => {
    console.log('Home page: Before Unmount');
  });

  onUnmounted(() => {
    console.log('Home page: Unmounted');
  });

  onBeforeUpdate(() => {
    console.log('Home page: Before Update');
  });

  onUpdated(() => {
    console.log('Home page: Updated');
  });

  onActivated(() => {
    console.log('Home page: onActivated');
  });

  onDeactivated(() => {
    console.log('Home page: onDeactivated');
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
