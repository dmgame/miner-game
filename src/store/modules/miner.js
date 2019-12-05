import Vue from "vue";
import Item from "../models/Item";

const state = {
  items: {},
  columnCounts: 6,
  rowCounts: 6,
  score: 0,
  isGameOver: false
};

const getters = {
  counts: ({ columnCounts, rowCounts }) => rowCounts * columnCounts,
  items: ({ items }) => Object.values(items),
  getItem: ({ items }) => id => items[id] || {}
};

const mutations = {
  ITEMS(storeState, items) {
    storeState.items = items;
  },
  SET_ITEM_OPENED(storeState, id) {
    Vue.set(storeState.items[id], "isOpened", true);
  },
  INC_SCORE(storeState) {
    storeState.score += 1;
  },
  RESET_SCORE(storeState) {
    storeState.score = 0;
  },
  IS_GAME_OVER(storeState, bool) {
    storeState.isGameOver = bool;
  }
};

const actions = {
  initGame: {
    root: true,
    handler({ dispatch, commit }) {
      commit("IS_GAME_OVER", false);
      commit("RESET_SCORE");
      dispatch("generateItems");
    }
  },
  generateItems({ commit, getters }) {
    const items = [...new Array(getters.counts)].reduce(acc => {
      const item = new Item();
      acc[item.id] = item;
      return acc;
    }, {});
    commit("ITEMS", items);
  },
  openItem({ commit, getters }, id) {
    commit("SET_ITEM_OPENED", id);
    const currentItem = getters.getItem(id);

    if (currentItem.isMine) {
      commit("IS_GAME_OVER", true);
      return;
    }
    commit("INC_SCORE");
  }
};

const minerStore = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

export default minerStore;
