const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }
  get radius() {
    return _radius.get(this);
  }
  set radius(value) {
    if (value <= 0) throw new Error("error number");
    _radius.set(this, value);
  }
}

const c = new Circle(1);

console.log(c.radius);
c.radius = 11;
console.log(c.radius);
