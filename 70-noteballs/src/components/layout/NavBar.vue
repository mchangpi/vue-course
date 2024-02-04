<template>
  <nav class="w-full border-gray-200 bg-cyan-200">
    <div
      class="container mx-auto flex flex-wrap items-center justify-between px-2"
      ref="navbarRef"
    >
      <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center whitespace-nowrap text-2xl font-semibold"
          >Note Demo</span
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
          class="mt-4 flex flex-col rounded-lg bg-sky-100 p-4 font-medium md:mt-0 md:flex-row md:space-x-1 md:border-0 md:p-0 rtl:space-x-reverse"
        >
          <li @click="() => handleSetMenuIdx(0)">
            <RouterLink
              to="/"
              class="md:border-1 block rounded border border-gray-300 px-3 py-2 text-center md:px-4"
              :class="getClassArr(0)"
              >Notes</RouterLink
            >
          </li>
          <li @click="() => handleSetMenuIdx(1)">
            <RouterLink
              to="/stats"
              class="md:border-1 block rounded border border-gray-300 px-3 py-2 text-center md:px-4"
              :class="getClassArr(1)"
              >Stats</RouterLink
            >
          </li>
          <li @click="() => handleSetMenuIdx(2)">
            <RouterLink
              to="/auth"
              @click="
                () => {
                  if (authStore.isUserSignIn) {
                    authStore.signOutUser();
                  }
                }
              "
              class="md:border-1 block rounded border border-gray-300 px-3 py-2 text-center md:ml-2 md:px-4"
              :class="getClassArr(2)"
              >{{
                authStore.isUserSignIn ? 'Sign Out' : 'Sign In / Up'
              }}</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useAuthStore } from '@/stores/authStore';

const isShowMenu = ref(false);
const activeIdx = ref(0);
const navbarRef = ref(null);

const authStore = useAuthStore();

const handleShowMenu = () => {
  isShowMenu.value = !isShowMenu.value;
  console.log('show menu', isShowMenu.value);
};

const handleSetMenuIdx = (idx) => {
  // console.log('nav idx', idx);
  activeIdx.value = idx;
  isShowMenu.value = false;
};

const getClassArr = (idx) => {
  if (2 === idx) {
    return ['text-white', 'bg-teal-300'];
  } else if (activeIdx.value === idx) {
    return ['text-white', 'bg-blue-500'];
  } else {
    return ['text-blue-700'];
  }
};

onClickOutside(navbarRef, (event) => {
  // console.log(event);
  isShowMenu.value = false;
});
</script>
