<template>
  <div class="cart">
    <h2>清单</h2>
    <p v-show="!products.length">
      <i>请添加产品到购物车</i>
    </p>
    <ul>
      <li
        v-for="product of products"
        :key="product.id"
      >{{product.title}} - {{product.price}} * {{product.quantity}}</li>
    </ul>
    <p>合计：{{total}}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">提交</button>
    </p>
    <p v-show="checkoutStatus">提交 {{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>

<style>
</style>