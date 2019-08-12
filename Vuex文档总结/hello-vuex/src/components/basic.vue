<template>
  <div class="basic">
    <h1>Hello Vue</h1>
    <h2>{{doneTodos}}</h2>
    <h3>{{doneTodosCount}}</h3>
    <h4>{{getTodoById(2)}}</h4>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      message: "小明"
    };
  },
  computed: mapGetters([
    // 映射 this.count 为 store.state.count
    "doneTodos",
    "doneTodosCount",
    "getTodoById"
  ])
};
</script>

<style>
</style>
