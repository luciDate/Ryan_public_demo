//属性私有化，一般用于一个属性方法需要进一步封装，进而达到屏蔽掉类的耦合性
//属性私有化在原型链中使用,需要使用Object.defineProperty();
function Circle(radius) {
  this.radius = radius; //私有属性，但它能在作用域链通过自由变量中找到
  let defaultLocation = { x: 0, y: 0 };
  Object.defineProperty(this, "defaultLocation", {
    get: function() {
      return defaultLocation;
    },
    set: function(value) {
      if (!value.x || !value.y) {
        throw new Error("invalid Location");
      } else {
        defaultLocation = value;
      }
    }
  });
}

const circle = new Circle(10);
console.log((circle.defaultLocation = { x: 1, y: 2 }));
