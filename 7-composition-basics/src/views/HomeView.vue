<template>
  <div class="flex flex-col items-center gap-4">
    <h2 ref="appTitleRef">{{ appTitle }}</h2>
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
    <div>
      <h2>Edit Counter Title:</h2>
      <input v-model="counterData.title" type="text" v-autofocus />
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
import { useCounter } from '@/use/useCounter';
import { vAutofocus } from '@/directives/vAutofocus';

const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
  useCounter();

const appTitle = 'My Counter App';

const appTitleRef = ref(null);

onMounted(() => {
  console.log(
    appTitleRef.value + ' is ' + appTitleRef.value.offsetWidth + ' px wide',
  );
});

if (false) {
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

  /*
  // App.vue
  <router-view v-slot="{ Component }"><keep-alive><component :is="Component" /> ...
  */
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
