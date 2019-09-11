function Foo(name, age) {
  this.name = name;
  this.age = age;
}

Foo.prototype.alertName = function() {
  console.log(this.name);
};

var f = new Foo("dahl", 13);

f.logName = function() {
  console.log(this.name);
};

f.alertName();
f.logName();
// 每一个函数
// f.__proto__ -> Foo.prototype 因为构造函数Foo.prototype是一个对象 所以 Foo.prototype._proto__ === Object.prototype
// Object.prototype.__proto__ === null 关闭死循环
f.toString(); // 顺序为 f.__proto__.__proto__中Object.prototype查找
