import Vue from "vue";
import Vuex from "vuex";
import minerStore from "./modules/miner";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    minerStore
  }
});

store.dispatch("initGame");

export default store;
