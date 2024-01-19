<template>
  <div class="modals sp flex flex-col items-center gap-2">
    <h1>Modals</h1>
    <button @click="toggleModal" class="border-2 p-2">Show modal</button>
    <!-- v-model pass showModal as modelValue to <Modal> -->
    <Modal
      v-model="showModal"
      @hideModal="handleHideModalEvent"
      title="My Modal Title (via props)"
    >
      <!-- <template #title>My Title (with shorthand #)</template> -->
      <!-- <template v-slot:title>My Title</template> -->

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        repudiandae, numquam natus inventore sequi nesciunt voluptatem iure
        quisquam placeat, nostrum nisi! Sit aperiam quam, beatae consectetur
        quos saepe eligendi blanditiis.
      </p>
    </Modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Modal from '@/components/Modal.vue';

const showModal = ref(false);

const toggleModal = (e) => {
  // console.log(e.target);
  showModal.value = !showModal.value;
};

const handleHideModalEvent = () => {
  console.log('accept hideModal event');
  showModal.value = false;
};
</script>
