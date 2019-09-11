//闭包的使用场景
//函数作为返回值
//函数作为参数传递
function F1() {
  var a = 100;
  return function() {
    console.log(a); //自由变量，可以在作用域链上查找
  };
}

var f1 = F1();
var a = 200;
f1();
