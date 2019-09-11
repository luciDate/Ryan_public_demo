//引用类型的属性都是可以扩展属性的

let obj = {};
obj.a = 100;

let arr = [];
arr.a = 100;

console.log(arr["a"]);

let func = function() {};

func.a = 99;

console.log(func.a);

//引用类型都有一个隐式原型，__proto__
//函数都有一个显示原型,prototype
//__proto__ === prototype 并且原型上的属性是可以扩展属性的

console.log(obj.__proto__);

console.log(func.prototype);

console.log(arr.__proto__);

console.log(obj.__proto__ === Object.prototype);

//如果试图得到某一个对象的属性，如果这个对象本身没有这一个属性，它会去__proto__（即构造函数的prototype）中寻找

function Foo(name, age) {
  this.name = name;
  this.age = age;
}

Foo.prototype.alertName = function() {
  console.log(this.name);
};

// 这里的this永远指向实列f
var f = new Foo("dahl", 13);

f.logName = function() {
  console.log(this.name);
};

f.alertName();
f.logName();
