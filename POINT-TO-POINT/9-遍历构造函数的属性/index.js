function Person(name) {
  this.name = name;
  this.logName = function() {
    console.log(this.name);
  };
}
Person.prototype.logN = function() {
  console.log("i am " + this.name);
};

let p = new Person("dahl");
p.toGo = function() {
  console.log("togo");
};

p.logN();

//遍历实列f自身的属性，不包括原型链
var item;
for (item in p) {
  if (p.hasOwnProperty(item)) {
    console.log(item);
  }
}
