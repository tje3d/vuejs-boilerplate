import Vue from 'vue';
import Vuex from 'vuex';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import router from './router';
import App from './components/app.vue';

import './css/app.scss';

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(Vuex);

const i18n = new VueI18n({
  locale: 'fa',
  fallbackLocale: 'en',
  messages: {
    fa: require('./languages/fa.json'),
    en: require('./languages/en.json')
  }
});

new Vue({
  el: '#app',
  render: h => h(App),
  i18n,
  router,
  store: require('./store').default
});
