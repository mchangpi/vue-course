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
      <span class="text-lg">Hello, {{ authStore.currentUser.email }}</span>
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
          class="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-1 md:border-0 md:p-0 rtl:space-x-reverse"
        >
          <li @click="() => handleSwitchTab()">
            <RouterLink
              to="/"
              class="md:border-1 block rounded border-2 border-gray-300 px-3 py-2 text-center md:px-4"
              :class="navTabClassObj['notes']"
              >Notes</RouterLink
            >
          </li>
          <li @click="() => handleSwitchTab()">
            <RouterLink
              to="/stats"
              class="md:border-1 block rounded border-2 border-gray-300 px-3 py-2 text-center md:px-4"
              :class="navTabClassObj['stats']"
              >Stats</RouterLink
            >
          </li>
          <li @click="() => handleSwitchTab()">
            <RouterLink
              to="/auth"
              class="md:border-1 block rounded border-2 border-gray-300 px-3 py-2 text-center md:px-4"
              :class="navTabClassObj['auth']"
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
import { onMounted, ref, computed } from 'vue';
import { onClickOutside } from '@vueuse/core';
import { useAuthStore } from '@/stores/authStore';

const authStore = useAuthStore();

const isShowMenu = ref(false);
const navbarRef = ref(null);

const routeArr = Object.entries(authStore.router.getRoutes())
  .filter(([idx, item]) => idx > 0)
  .map(([idx, item]) => {
    // console.log(idx, item.name);
    return item.name;
  });

const navTabClassObj = computed(() => {
  const { currentRoute: route } = authStore.router;
  const classObj = {};
  // console.log(route.value.name);

  for (let item of Object.values(routeArr)) {
    if (item === route.value.name) {
      classObj[item] = ['text-white', 'bg-blue-500'];
    } else {
      classObj[item] = ['text-blue-700', 'bg-sky-100'];
    }
  }

  return classObj;
});

const handleShowMenu = () => {
  isShowMenu.value = !isShowMenu.value;
  console.log('show menu', isShowMenu.value);
};

const handleSwitchTab = () => {
  isShowMenu.value = false;
};

onClickOutside(navbarRef, (event) => {
  // console.log(event);
  isShowMenu.value = false;
});

onMounted(async () => {
  // await handleSwitchTab();
});
</script>
