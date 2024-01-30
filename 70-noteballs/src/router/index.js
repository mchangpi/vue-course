import { createRouter, createWebHistory } from 'vue-router';
import NotesView from '@/views/NotesView.vue';
import EditView from '@/views/EditView.vue';
import StatsView from '@/views/StatsView.vue';
import AuthView from '@/views/AuthView.vue';

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NotesView,
  },
  { path: '/edit/:id', name: 'edit', component: EditView },
  {
    path: '/stats',
    name: 'stats',
    component: StatsView,
  },
  { path: '/auth', name: 'auth', component: AuthView },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
