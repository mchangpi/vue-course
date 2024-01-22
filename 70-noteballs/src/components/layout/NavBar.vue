<template>
  <nav class="border-gray-200 bg-white">
    <div
      class="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4"
    >
      <a
        href="https://www.cakeresume.com/mchangpi"
        target="_blank"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <span class="self-center whitespace-nowrap text-2xl font-semibold"
          >Noteballs Demo</span
        >
      </a>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden"
        @click="handleShowMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div class="w-full md:block md:w-auto" :class="{ hidden: !isShowMenu }">
        <ul
          class="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse"
        >
          <li @click="() => handleSetNavIdx(0)">
            <RouterLink
              to="/"
              class="block rounded px-3 py-2 md:border-0 md:px-4"
              :class="getClassArr(0)"
              >Notes</RouterLink
            >
            <!-- :class="[activeIdx === 0 ? 'text-white' : '']" -->
          </li>
          <li @click="() => handleSetNavIdx(1)">
            <RouterLink
              to="/stats"
              class="block rounded px-3 py-2 md:border-0 md:px-4"
              :class="getClassArr(1)"
              >Stats</RouterLink
            >
            <!-- :class="[activeIdx === 1 ? 'text-white' : '']" -->
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
// import { FwbNavbar } from 'flowbite-vue';

const isShowMenu = ref(false);
const activeIdx = ref(0);

const handleShowMenu = () => {
  console.log('show menu', isShowMenu.value);
  isShowMenu.value = !isShowMenu.value;
};

const handleSetNavIdx = (idx) => {
  // console.log('nav idx', idx);
  activeIdx.value = idx;
};

const getClassArr = (idx) => {
  if (activeIdx.value === idx) return ['text-white', 'bg-blue-500'];
  else return ['text-blue-500'];
};
</script>
