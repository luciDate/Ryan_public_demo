if (true) {
  var name = "dahl"; // 无块级作用域
  // let name = "ryan" 有块级作用域
}
console.log(name);

//函数与全局作用域,函数有自己的块级作用域
var a = 100;
function fn() {
  var a = 200;
  console.log("fn" + a);
}

console.log("global", a);
fn();

//作用域链
var i = 100;
function F1() {
  var ii = 200;
  //当前作用域没有定义的变量叫自由变量,自由变量可以在它声明的父级作用域寻找
  function F2() {
    var iii = 300;
    console.log(i);
    console.log(ii);
    console.log(iii);
  }
  F2();
}
F1();
