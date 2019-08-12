import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    //getters调用自身函数
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    },
    //getters传参
    getTodoById: state => id => {
      return state.todos.find(todo => todo.id === id);
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

//console.log(store.getters.getTodoById(2));
