import { createRouter, createWebHistory } from 'vue-router';
import ViewNotes from '@/views/ViewNotes.vue';
import ViewEdit from '@/views/ViewEdit.vue';
import ViewStats from '@/views/ViewStats.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: ViewNotes,
  },
  { path: '/edit/:id', name: 'edit', component: ViewEdit },
  {
    path: '/stats',
    name: 'stats',
    component: ViewStats,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
