import Vuex, { ActionContext } from 'vuex';

interface StateAuth {
  counter: number;
}

const moduleAuth = {
  state: {
    counter: 0
  } as StateAuth,
  mutations: {
    increment(state: StateAuth) {
      state.counter++;
    }
  },
  actions: {
    increment({ commit }: ActionContext<{}, {}>) {
      commit('increment');
    }
  },
  getters: {}
};

const store = new Vuex.Store({
  modules: {
    auth: moduleAuth
  }
});

export default store;
