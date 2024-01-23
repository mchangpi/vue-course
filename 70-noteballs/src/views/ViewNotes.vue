<template>
  <!-- https://flowbite.com/docs/components/card/#user-profile-card -->

  <div
    v-for="i in 2"
    class="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex flex-col items-start p-4">
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Bonnie Green
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >Visual Designer</span
      >
      <div class="mt-4 flex md:mt-6">
        <a
          href="#"
          class="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >Edit</a
        >
        <a
          href="#"
          class="ms-3 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >Delete</a
        >
      </div>
    </div>
  </div>
</template>
