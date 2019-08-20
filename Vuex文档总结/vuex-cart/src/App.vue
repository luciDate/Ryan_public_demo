<template>
  <div id="app">
    <h1>购物车实列</h1>
    <p>账号：{{email}}</p>
    <hr />
    <h2>产品</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductList from "./components/ProductList.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
export default {
  components: {
    ProductList,
    ShoppingCart
  },
  computed: mapState({
    email: state => state.userInfo.email
  }),
  name: "app"
};
</script>

<style>
</style>
