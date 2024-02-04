import './assets/main.css';

import { createApp, markRaw } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from '@/router/index';

const app = createApp(App);

const pinia = createPinia();
/* https://pinia.vuejs.org/core-concepts/plugins.html#Adding-new-external-properties */
pinia.use(({ store }) => {
  store.intro = 'Pinia Store';
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.mount('#app');
