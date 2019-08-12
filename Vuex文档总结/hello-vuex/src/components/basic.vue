<template>
  <div class="basic">
    <h1>Hello Vue</h1>
    <h2>{{count}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      message: "小明"
    };
  },
  computed: mapState([
    // 映射 this.count 为 store.state.count
    "count"
  ])
};
</script>

<style>
</style>
