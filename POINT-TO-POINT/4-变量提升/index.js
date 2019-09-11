// JavaScript 变量提升
// JavaScript 中，函数及变量的声明都将被提升到函数的最顶部。
// JavaScript 中，变量可以在使用后声明，也就是变量可以先使用再声明。

a = 5;

console.log(a);

var a;

var b;
b = 1;
console.log(b);

//JavaScript 初始化变量不会提升

var c = 1;

console.log(c, d);

var d = 1;

var e = 1;
f = 1;
console.log(e, f);

var f;
