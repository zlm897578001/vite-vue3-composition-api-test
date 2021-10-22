export const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('@/components/layout.vue'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home/index.vue')
      },
      {
        path: '/canvas',
        component: () => import('@/views/canvas/index.vue')
      }
    ]
  },
]