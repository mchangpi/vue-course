<template>
  <div
    v-if="!authStore.isUserSignIn"
    class="flex w-full flex-col items-center gap-10 border-b border-gray-200 text-center text-sm font-medium text-gray-500"
  >
    <div class="text-xl">Hello Anonymous user, Please Sign In or Sign Up</div>
    <ul class="-mb-px flex flex-wrap">
      <li class="me-2">
        <a
          href="#"
          :class="getClassArr(!isRegister)"
          @click.prevent="
            () => {
              isRegister = false;
              credentials.email = credentials.password = '';
            }
          "
          class="inline-block rounded-t-lg border-b-2 p-4 text-lg hover:border-gray-300 hover:text-gray-600"
          >Sign In</a
        >
      </li>
      <li class="me-2">
        <a
          href="#"
          :class="getClassArr(isRegister)"
          @click.prevent="
            () => {
              isRegister = true;
              credentials.email = credentials.password = '';
            }
          "
          class="inline-block rounded-t-lg border-b-2 p-4 text-lg"
          >Sign Up</a
        >
      </li>
    </ul>
    <div class="max-w-md rounded-lg border border-gray-200 bg-white p-6 shadow">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {{ formTitle }}
        </h5>
        <form class="mx-auto max-w-sm" @submit.prevent="handleSubmit">
          <div class="mb-5 text-left">
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-900"
              >Your email</label
            >
            <input
              v-model="credentials.email"
              type="email"
              id="email"
              class="block w-full min-w-80 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              placeholder="test@gmail.com"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="mb-2 block min-w-80 text-left text-sm font-medium text-gray-900"
              >Your password</label
            >
            <input
              v-model="credentials.password"
              type="password"
              id="password"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            {{ formTitle }}
          </button>
        </form>
      </a>
    </div>
  </div>

  <div
    v-else
    class="flex w-full flex-col items-center gap-10 border-b border-gray-200 text-center text-sm font-medium text-gray-500"
  >
    <div class="text-xl">
      Hello {{ authStore.currentUser.email }}, Do you want to Sign Out ?
    </div>
    <button
      type="button"
      @click="handelSignOut"
      class="w-1/2 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300"
    >
      Sign Out
    </button>
  </div>
</template>

<script setup>
import { ref, computed, reactive } from 'vue';
import { useAuthStore } from '@/stores/authStore';

const isRegister = ref(false);
const credentials = reactive({
  email: '',
  password: '',
});

const authStore = useAuthStore();

const getClassArr = (isActive) => {
  if (isActive) return ['border-blue-600', 'text-blue-600'];
  else return ['border-transparent'];
};

const formTitle = computed(() => {
  return isRegister.value ? 'Sign Up' : 'Sign In';
});

const handleSubmit = async () => {
  if (!credentials.email || !credentials.password) {
    alert('Please enter email and password');
    return;
  }

  if (isRegister.value) {
    handleSignUpSubmit();
  } else {
    await handleSignInSubmit();
  }
};

const handleSignUpSubmit = () => {
  // console.log('sign up submit');
  authStore.registerUser(credentials);
};

const handleSignInSubmit = async () => {
  const user = await authStore.signInUser(credentials);
  // console.log(user);

  authStore.router.push({ name: 'notes' });
};

const handelSignOut = () => {
  console.log('sign out');

  authStore.signOutUser();
};
</script>
