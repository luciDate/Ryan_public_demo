<template>
  <div class="basic">
    <h1>Hello Vue</h1>
    <h2>{{a}}</h2>
    <h2>{{b}}</h2>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      message: "小明"
    };
  },
  computed: mapState({
    a: state => state.a.count,
    b: state => state.b.count
  }),
  methods: mapActions("some/nested/module", ["foo"])
};
</script>

<style>
</style>
