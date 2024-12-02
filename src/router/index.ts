import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: () => import('@/views/WelcomeView.vue')
  }
];

// Erstelle die Router-Instanz mit der History-API und den definierten Routen
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

// Exportiere die Router-Instanz fuer die Verwendung in der Vue-Anwendung
export default router;
