class Person {
  constructor(name) {
    this.name = name;
    this.move = function() {
      console.log("i am moveing");
    };
  }
  //原型链函数
  eat() {
    console.log("i am eating");
  }
}

Person.prototype.say = function() {
  console.log("hello world");
};

let p = new Person();
p.move();
p.eat();
p.say();
