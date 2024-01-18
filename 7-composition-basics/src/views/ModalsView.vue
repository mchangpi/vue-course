<template>
  <div class="modals flex flex-col items-center gap-2 sp">
    <h1>Modals</h1>
    <button @click="toggleModal" class="border-2 p-2">Show/Hide modal</button>
    <Teleport to=".modals-container">
      <div v-if="showModal" class="bg-slate-100 z-10">
        <h1>This is a modal</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          repudiandae, numquam natus inventore sequi nesciunt voluptatem iure
          quisquam placeat, nostrum nisi! Sit aperiam quam, beatae consectetur
          quos saepe eligendi blanditiis.
        </p>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const toggleModal = (e) => {
  console.log(e.target);
  showModal.value = !showModal.value;
};
</script>
