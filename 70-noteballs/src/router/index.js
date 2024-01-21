import { createRouter, createWebHistory } from 'vue-router';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewStats from '@/views/ViewStats.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'notes',
      component: ViewNotes,
    },
    {
      path: '/stats',
      name: 'stats',
      component: ViewStats,
    },
  ],
});

export default router;
