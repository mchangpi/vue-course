<template>
  <div class="modals sp flex flex-col items-center gap-2">
    <h1>Modals</h1>

    <div>
      <label
        >Show Dark Modal?
        <input type="checkbox" v-model="showDarkModal" />
      </label>
    </div>
    <button @click="toggleModal" class="border-2 p-2">Show modal</button>

    <!-- v-model pass showModal prop to <Modal> -->
    <!-- v-model listen 'update:modelValue' event and update showModal -->
    <component
      v-model="showModal"
      v-bind:is="showDarkModal ? ModalDark : Modal"
      title="My Modal Title (via props)"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
        repudiandae, numquam natus inventore sequi nesciunt voluptatem iure
        quisquam placeat, nostrum nisi! Sit aperiam quam, beatae consectetur
        quos saepe eligendi blanditiis.
      </p>
    </component>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Modal from '@/components/Modal.vue';
import ModalDark from '@/components/ModalDark.vue';

const showDarkModal = ref(false);

const showModal = ref(false);

const toggleModal = (e) => {
  // console.log(e.target);
  showModal.value = !showModal.value;
};
</script>
