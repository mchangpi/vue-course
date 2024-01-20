import { reactive, computed, watch, nextTick } from 'vue';

/* global counter data */
const counterData = reactive({
  count: 0,
  title: 'My Counter',
});

/* composable */
export function useCounter() {
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

  const decreaseCounter = async (amount = 1, event = {}) => {
    // console.log("event", event);
    counterData.count -= amount;
    await nextTick();
    console.log('Do something when updating(-) the counter DOM');
  };

  const increaseCounter = async (amount = 1, event = {}) => {
    // console.log("event", event);
    counterData.count += amount;
    await nextTick();
    console.log('Do something when updating(+) the counter DOM');
  };

  return {
    counterData,
    oddOrEven,
    increaseCounter,
    decreaseCounter,
  };
}
