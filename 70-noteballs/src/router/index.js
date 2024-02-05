import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore';
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

router.beforeEach(async (to, from) => {
  const authStore = useAuthStore();
  // console.log('to', to);
  if (authStore.currentUser.id === '-1' && to.name === 'stats') {
    console.log(authStore.currentUser);
    // return { name: 'stats' };
    alert('Please Sign In First !!');
    return false;
  }
});

export default router;
