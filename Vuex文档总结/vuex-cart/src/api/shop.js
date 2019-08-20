const _product = [
  { id: 1, title: "华为 Mate 20", price: 3999, inventory: 2 },
  { id: 2, title: "小米 9", price: 2999, inventory: 0 },
  { id: 3, title: "OPPO R17", price: 2999, inventory: 5 }
];

export default {
  getProducts(cd) {
    setTimeout(() => {
      cd(_product);
    }, 100);
  },
  buyProducts(products, cd, errorCd) {
    setTimeout(() => {
      Math.random() > 0.5 ? cd() : errorCd();
    }, 100);
  }
};
