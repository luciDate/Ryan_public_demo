<template>
  <ul>
    <li v-for="product of products" :key="product.id">
      {{product.title}} - {{product.price}}
      <br />
      <div>
        数量:
        <select name id v-model="numbers[product.id]">
          <option v-for="n of product.inventory" :key="n" :value="n">{{n}}</option>
        </select>
      </div>
      <button :disabled="!product.inventory" @click="addProductToCart(product)">加入购物车</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      numbers: {}
    };
  },
  watch: {
    // 添加 immediate: true 后该回调将会在侦听开始之后被立即调用
    products: {
      handler: function(val) {
        val.forEach(product => {
          if (this.numbers[product.id] === undefined) {
            this.$set(this.numbers, product.id, 1);
          }
        });
      },
      immediate: true
    }
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    addProductToCart(product) {
      this.$store.dispatch("cart/addProductToCart", {
        product,
        number: this.numbers[product.id]
      });
      this.numbers[product.id] = 1;
    }
  },
  created() {
    this.$store.dispatch("products/getAllProducts");
  }
};
</script>

<style>
</style>