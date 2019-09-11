//defineProperty 的作用就是直接在一个对象上定义一个新属性，或者修改一个已经存在的属性
let obj = {};
//相当于
Object.defineProperty(obj, "name", {
  value: "dahl",
  //可重写
  writable: true,
  //可删除
  configurable: true,
  //可枚举
  enumerable: true
});

//默认情况下的Object.defineProperty
Object.defineProperty(obj, "age", {
  value: 27
});
//相当于
Object.defineProperty(obj, "age", {
  value: 27,
  writable: false,
  enumerable: false,
  configurable: false
});
