
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Sells.vue') },
      { path: '/sell', component: () => import('pages/Sells.vue') },
      { path: '/stockControl', component: () => import('pages/Sells.vue') },
      { path: '/settings', component: () => import('pages/Sells.vue') },
    ],
  },
];

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue'),
  });
}

export default routes;
