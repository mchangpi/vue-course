<template>
  <div class="flex justify-end bg-slate-50 p-2 text-xl font-bold">
    {{ userData.name }}@{{ userData.username }} &nbsp; | &nbsp;
    <span :class="[online ? 'text-green-500' : 'text-gray-300']">
      {{ online ? 'Online' : 'Offline' }}
    </span>
  </div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
  </nav>

  <RouterView />
</template>

<script setup>
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core';

const userData = reactive({
  name: 'Milton',
  username: 'miltonchang',
});

/* userData is available to all children */
provide('userData', userData);

const online = useOnline();
console.log('online: ', online);
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
