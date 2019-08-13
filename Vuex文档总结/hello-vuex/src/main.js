import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
Vue.use(Vuex);

// Action 类似于 mutation，不同在于：

// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
//比如你要向服务器提交订单的时候需要用到Action

const store = new Vuex.Store({
  state: {
    count: 10
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state, payload) {
      state.count -= payload.amount;
    }
  },
  actions: {
    incrementAsync({ commit }) {
      setTimeout(() => {
        commit("increment");
      }, 1000);
    },
    decrementAsync({ commit }, payload) {
      setTimeout(() => {
        commit("decrement", payload);
      }, 1000);
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  data() {
    return {};
  },
  render: h => h(App)
}).$mount("#app");
