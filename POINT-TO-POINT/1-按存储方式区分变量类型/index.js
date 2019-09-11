//值类型

const str = "dahl"; //字符串

const number = 100; //数值

const boolean = false; //布尔值

const lost = undefined; //undefined

const empty = null; //null

//引用类型

const obj = {}; //对象

const arr = []; //数组

const fun = function() {}; //函数

//值类型的指针，指向内存的不同地址

const i = (function() {
  let a = 9;

  let b = a;

  a = 1;

  console.log(`a=${a},b=${b}`);
})();

//引用类型的指针，指向内存相同地址

const ii = (function() {
  let a = { name: "dahl" };
  let b = a;
  b.name = "ryan dahl";
  console.log(a, b);
})();
