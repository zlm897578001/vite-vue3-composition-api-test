import { createRouter, createWebHashHistory} from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((t, f, n) => {
  console.log(t, f, n);
  n()
})
