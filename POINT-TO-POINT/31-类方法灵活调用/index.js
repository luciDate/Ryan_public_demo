function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Circle;
}

function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle() {}

extend(Circle, Shape);
//方法重写一定要写在继承函数里面，因为函数会重置构造属性
Circle.prototype.duplicate = function() {
  //调用其它类的方法
  Shape.prototype.duplicate.call(this);
  console.log("Cirle duplicate");
};

const c = new Circle();
c.duplicate();
