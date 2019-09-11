function Foo(name, age) {
  // creact -> this = {}
  this.name = name;
  this.age = age;
  this.class = "class-1";
  // return this
}

var f = new Foo("Ryan", 13); // new 关键字会把构造函数的this指向空对象，不然this永远指向window

console.log(f.name);

// var f1 = new Foo("dahl",13);

//所有对象都由函数生成
var a = {}; // 语法糖 -> var a = new Object()
var b = []; // 语法糖 -> var a = new Array()
var c = function() {}; // 语法糖 -> var a = new Fuction()
