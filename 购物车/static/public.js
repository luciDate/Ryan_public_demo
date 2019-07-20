window.onload = function() {
  class Cart {
    constructor() {
      this.btn = document.querySelectorAll("input");
      this.productsNum = document.querySelector(".productsNum");
      this.pricetal = document.querySelector(".pricetal");
      this.pricest = document.querySelector(".pricest");
      this.totalnum = 0;
    }
    //格式化价格
    initPrice(v) {
      let reviewStr = "";
      let reviewUnit = [];
      if (v.constructor === Array) {
        let len = v.length;
        for (let i = 0; i < len; i++) {
          let str = v[i];
          let myArr = str.split("");
          myArr.splice(myArr.length - 1, 1);
          let reviewArr = myArr.join("");
          reviewUnit.push(reviewArr);
        }
        return reviewUnit;
      } else if (v.constructor === String) {
        let myArr = v.split("");
        myArr.splice(myArr.length - 1, 1);
        reviewStr = myArr.join("");
        return reviewStr;
      }
    }
    //格式化NodeList
    initNode(node) {
      let arrUnit = [];
      for (let i = 0; i < node.length; i++) {
        arrUnit.push(node[i].innerHTML);
      }
      return arrUnit;
    }
    //小计
    getNumTotal(num, productPrice) {
      return parseInt(num) * parseFloat(productPrice);
    }
    //总价
    getTotal() {
      let total = document.querySelectorAll(".subtal");
      let res = 0;
      let len = total.length;
      for (let i = 0; i < len; i++) {
        res += parseFloat(total[i].innerHTML);
      }
      return res;
    }
    //最大单价
    getPriceMax() {
      let nums = document.querySelectorAll(".num");
      let unit = document.querySelectorAll(".unit");
      let arrUnit = this.initNode(unit);
      let reviewUnit = this.initPrice(arrUnit);
      let temp = 0;
      let len = nums.length;
      for (let i = 0; i < len; i++) {
        if (nums[i].innerHTML != 0) {
          if (temp < parseFloat(reviewUnit[i])) {
            temp = parseFloat(reviewUnit[i]);
          }
        }
      }
      return temp;
    }
    //加号事件
    plus(btn) {
      let num = btn.parentNode.querySelector(".num");
      let n = parseInt(num.innerHTML);
      num.innerHTML = ++n;
      this.totalnum++;
      let unit = btn.parentNode.parentNode.parentNode.querySelector(".unit");
      let subtotal = btn.parentNode.parentNode.parentNode.querySelector(
        ".subtal"
      );
      let reviewUnit = this.initPrice(unit.innerHTML);
      subtotal.innerHTML = this.getNumTotal(num.innerHTML, reviewUnit);
      this.productsNum.innerHTML = this.totalnum;
      this.pricetal.innerHTML = this.getTotal();
      this.pricest.innerHTML = this.getPriceMax();
    }
    //减号事件
    minus(btn) {
      let num = btn.parentNode.querySelector(".num");
      if (parseInt(num.innerHTML) > 0) {
        let n = parseInt(num.innerHTML);
        num.innerHTML = --n;
        this.totalnum--;
        let unit = btn.parentNode.parentNode.parentNode.querySelector(".unit");
        let subtotal = btn.parentNode.parentNode.parentNode.querySelector(
          ".subtal"
        );
        let reviewUnit = this.initPrice(unit.innerHTML);
        subtotal.innerHTML = this.getNumTotal(num.innerHTML, reviewUnit);
        this.productsNum.innerHTML = this.totalnum;
        this.pricetal.innerHTML = this.getTotal();
        this.pricest.innerHTML = this.getPriceMax();
      }
    }
    //商品总数量
    getProductsTotal() {
      let nums = document.querySelectorAll(".num");
      let res_nums = 0;
      for (let i = 0; i < nums.length; i++) {
        res_nums += parseInt(nums[i].innerHTML);
      }
      return res_nums;
    }
    //删除按钮事件
    del(btn) {
      let del = btn.parentNode.parentNode;
      let parent = del.parentNode;
      parent.removeChild(del);
      this.productsNum.innerHTML = this.getProductsTotal();
      this.pricetal.innerHTML = this.getTotal();
      this.pricest.innerHTML = this.getPriceMax();
      this.productsSort();
    }
    //购物车排序
    productsSort() {
      let idNum = document.querySelectorAll(".idNum");
      for (let i = 0; i < idNum.length; i++) {
        idNum[i].innerHTML = i + 1;
      }
    }
    //绑定事件
    bind() {
      let that = this;
      for (let i = 0; i < this.btn.length; i++) {
        if (i % 2 != 0) {
          this.btn[i].onclick = function() {
            that.plus(this);
          };
        } else {
          this.btn[i].onclick = function() {
            that.minus(this);
          };
        }
      }
      let delBtn = document.querySelectorAll(".delete");
      for (let i = 0; i < delBtn.length; i++) {
        delBtn[i].onclick = function() {
          that.del(this);
        };
      }
    }
  }

  let c = new Cart();
  c.bind();
};
