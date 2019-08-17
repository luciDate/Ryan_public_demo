import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
Vue.use(Vuex);

//module的state是注册在局部空间而其他的mutations，actions，getters是注册在全局空间,所以命名是不能够相同的因为他们会一起调用
//如果需要自动根据模块注册的路径调整命名，你需要注册命名空间

const moduleA = {
  namespaced: true,
  state: {
    count: 3
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  },
  actions: {
    incrementIfOdd(state, commit) {
      if (state.count % 2 === 1) {
        commit("increment");
      }
    }
  },
  getters: {
    doubleCount(state) {
      return state.count * 2;
    }
  }
};

const moduleB = {
  namespaced: true,
  state: {
    count: 8
  },
  modules: {
    subModules: {
      namespaced: true,
      state: {},
      mutations: {
        login() {}
      },
      getters: {
        login() {}
      },
      actions: {
        login() {}
      }
    }
  },
  mutations: {},
  actions: {
    someActions({ dispatch, commit, getters, rootGetters }) {
      getters.someGetters; // use getters
      rootGetters.someGetter; // store -> someGetters

      dispatch("someActions"); // -> to part mutations
      dispatch("someActions", null, { root: true }); // -> to store mutations

      commit("someActions"); // -> to part mutations
      commit("someActions", null, { root: true }); // -> to store mutations
    }
  },
  getters: {
    someGetter(state, getters, rootSate, rootGetters) {
      rootSate.count; // -> 7
      state.count; // ->8

      getters.someGetter; // -> myself
      rootGetters.someGetters; // store -> someGetters
    }
  }
};

const store = new Vuex.Store({
  state: {
    count: 7
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
});

Vue.config.productionTip = false;

// console.log(store.state.a.count);
// store.commit("a/increment");
// console.log(store.state.a.count);

store.commit("b/subModules/login");
store.dispatch("b/subModules/login");
store.getters["b/subModules/login"];

new Vue({
  store,
  data() {
    return {};
  },
  render: h => h(App)
}).$mount("#app");
