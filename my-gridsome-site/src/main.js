// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vue from 'vue';
import Vuex from 'vuex';
import DefaultLayout from '~/layouts/Default.vue';
import store from '~/store';

Vue.use(Vuex);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
}

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

  // Initialize the Vue app with Vuex store
  Vue.prototype.$store = store;
