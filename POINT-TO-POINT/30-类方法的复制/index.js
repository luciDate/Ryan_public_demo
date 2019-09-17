function Shape() {}

Shape.prototype.duplicate = function() {
  console.log("duplicate");
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Shape
Circle.prototype.constructor = Circle;
// Circle.prototype.constructor = Circle
//只能复制原型链上的方法

Circle.prototype.draw = function() {
  console.log("draw");
};

const s = new Shape();
const c = new Circle(1);

c.duplicate();
