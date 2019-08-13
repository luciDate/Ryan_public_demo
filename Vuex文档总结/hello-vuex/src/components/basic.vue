<template>
  <div class="basic">
    <h1>Hello Vue</h1>
    <h2>{{count}}</h2>
    <hr />
    <button v-on:click="increment">Change Store State</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  data() {
    return {
      message: "小明"
    };
  },
  computed: mapState(["count"]),
  methods: mapMutations(["increment"])
};
</script>

<style>
</style>
