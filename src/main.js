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

  // Register vue-google-adsense
if (process.env.NODE_ENV === 'production') {
  Vue.use(require('vue-script2'));
  Vue.use(Ads.Adsense);
  Vue.use(Ads.InArticleAdsense);
  Vue.use(Ads.InFeedAdsense);

  // Add the AdSense script
  if (isClient) {
    head.script.push({
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
      async: true,
      'data-ad-client': 'ca-pub-3940256099942544',
      crossorigin: 'anonymous'
    });
  }
}
}

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

  // Initialize the Vue app with Vuex store
  Vue.prototype.$store = store;
