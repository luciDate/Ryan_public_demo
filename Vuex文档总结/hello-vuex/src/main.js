import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    //mutations事件注册
    increment(state) {
      state.count++;
    },
    //mutations传参
    incrementBy(state, payload) {
      state.count += payload.amount;
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

//store.commit("increment");
//store.commit("incrementBy", { amount: 9 });

// store.commit({
//   type: "incrementBy",
//   amount: 29
// });

//Vue.set(store.state, "new prop", 123);

//console.log(store.state);
//console.log(store.state.count);
