import IndexView from '@/views/IndexView.vue';
import { createRouter, createWebHistory } from 'vue-router';


// Vue.use(VueRouter);



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexView
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testView.vue')
    },
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/registerView.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/adminView.vue'),
    },
    {
      path: '/insert',
      name: 'insert',
      component: () => import('../views/insertView.vue'),
    }

  ]
})

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser;
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

//   if (requiresAuth && !currentUser) {
//     next('login');
//   } else {
//     next();
//   }
// });


export default router
