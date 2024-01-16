<template>
  <div class="about flex flex-col items-center">
    <h1>About</h1>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      placeholder="vAutofocus is converted to v-autofocus in <template/>"
      v-autofocus
      class="border"
    ></textarea>
  </div>
</template>

<script setup>
import { vAutofocus } from "@/directives/vAutofocus";
</script>
