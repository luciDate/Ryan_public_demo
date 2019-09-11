//typeof

//准确判断值类型与null
typeof undefined; // -> undefined
typeof "abc"; // -> string
typeof 123; // -> number
typeof true; // -> Boolean

//无法准确判断引用类型
typeof {}; // -> Object
typeof []; // -> Object
typeof null; // -> Object
typeof console.log; // -> Function

//引用类型的判断应该用instanceof

const iii = (function() {
  const a = [];
  const b = {};
  const c = null;
  const d = function() {};
  const f = undefined;
  console.log(a instanceof Array);
  console.log(b instanceof Object);
  console.log(c === null);
  console.log(d instanceof Function);
  console.log(f === undefined);
})();

//变量强制转换

const iv = (function() {
  let a = 100 + 10; // -> 110

  let b = 100 + "10"; // -> 10010

  console.log(typeof b);
})();

// == 会进行内置的强制类型转换 === 不会强制转换类型，严格对比两边的类型

const v = (function() {
  console.log(10 == "10");
  console.log(10 === "10");
  console.log(0 == ""); //0 和 空字符串 都返回false
  console.log(0 === "");
  console.log(null == undefined);
  console.log(null === undefined);
})();

// if的强制类型转换

const vi = (function() {
  const a = true;
  if (a) {
    // -> true
  }
  const b = 100;
  if (b) {
    // -> true
  }
  const c = "";
  if (c) {
    // ->false
  }
  if (0) {
    // -> false
  }
  if (NaN) {
    // -> false
  }
  if (null) {
    // -> false
  }
  if (undefined) {
    // -> false
  }
})();

//逻辑运算符的强制转换
console.log(10 && 0); // -> 0

console.log("" || "abc"); // -> "abc"

console.log(!window.abc); // undefined 为 false 取反返回 true

// 判断一个变量是true还是false

const vii = (function() {
  const a = 100;
  console.log(!!a);
})();
