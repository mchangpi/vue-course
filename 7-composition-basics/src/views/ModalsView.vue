<template>
  <div class="modals sp flex flex-col items-center gap-2">
    <h1>Modals</h1>
    <button @click="toggleModal" class="border-2 p-2">Show/Hide modal</button>
    <Modal v-if="showModal"></Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);

const toggleModal = (e) => {
  console.log(e.target);
  showModal.value = !showModal.value;
};
</script>
