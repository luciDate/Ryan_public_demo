class Shape {
  constructor(color) {
    this.color = color;
    this.name = "dahl";
  }
  move() {
    console.log("move");
  }
}

class Circle extends Shape {
  constructor(color, name) {
    super(color);
  }
  draw() {
    console.log("draw " + this.color + " " + this.name);
  }
}

const c = new Circle("red");
c.move();
c.draw();
