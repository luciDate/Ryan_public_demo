<template>
  <div class="basic">
    <h1>Hello Vue</h1>
    <h2>{{count}}</h2>
    <hr />
    <button @click="incrementAsync">change + Async</button>
    <hr />
    <button @click="decrementAsync">change - decrementAsync</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      message: "小明"
    };
  },
  computed: mapState(["count"]),
  methods: {
    ...mapActions(["incrementAsync"]),
    decrementAsync() {
      this.$store.dispatch({
        type: "decrementAsync",
        amount: 3
      });
    }
  }
};
</script>

<style>
</style>
