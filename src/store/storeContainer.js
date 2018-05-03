import Vue from 'vue'
import Vuex from 'vuex'

import authStore from './authStore';
import TimeStore from './timeStore';
import OutingStore from './outingStore';
// import scannerStore from './scannerStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    authStore,
    TimeStore,
    OutingStore
  }
})
