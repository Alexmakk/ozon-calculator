import Vue from 'vue';
import Vuex from 'vuex';
 
import { createVuexStore } from 'vuex-simple';
import { CalcStore } from './store';
 
Vue.use(Vuex);
 
// create our module class instance
const instance = new CalcStore();
 
// create and export our store
export default createVuexStore(instance, {
  strict: false,
  modules: {},
  plugins: []
});
