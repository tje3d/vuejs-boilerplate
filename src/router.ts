import VueRouter from 'vue-router';
import Login from './components/login/login.vue';
import Im from './components/im/im.vue';

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: Login,
      beforeEnter: (to, from, next) => {
        // Redirect to im if authenticated
        next();
      }
    },
    { path: '/im', component: Im },
    { path: '/', redirect: '/login' }
  ]
});

export default router;
