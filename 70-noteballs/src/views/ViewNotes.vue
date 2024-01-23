<template>
  <!-- https://flowbite.com/docs/components/forms/#default-form -->
  <form
    class="z-0 mx-auto mb-2 flex max-w-5xl flex-col items-end rounded-md bg-cyan-300 p-4"
  >
    <div class="mb-2 w-full">
      <label for="email" class="mb-2 block text-lg font-medium text-gray-900"
        >New Note</label
      >
      <textarea
        class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        placeholder="Add a new note"
        required
      />
    </div>
    <button
      type="submit"
      class="m-2 w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Submit
    </button>
  </form>

  <hr class="m-4 border-2 border-dotted" />

  <!-- https://flowbite.com/docs/components/card/#user-profile-card -->
  <div
    v-for="i in 3"
    class="mx-auto my-2 max-w-5xl rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800"
  >
    <div class="flex flex-col items-start p-4">
      <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Bonnie Green
      </h5>
      <span class="text-sm text-gray-500 dark:text-gray-400"
        >Visual Designer</span
      >
      <div class="mt-4 flex w-full md:mt-6">
        <a
          href="#"
          class="w-1/2 items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >Edit</a
        >
        <a
          href="#"
          class="ms-2 w-1/2 items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200"
          >Delete</a
        >
      </div>
    </div>
  </div>
</template>
