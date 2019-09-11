function Animal(v) {
  this.v = v;
  this.eat = function() {
    console.log("animal eat " + this.v);
  };
}

function Dog(v) {
  //方法一
  Animal.call(this, v);
  this.bark = function() {
    console.log("dog bark");
  };
}

//方法二
// Dog.prototype = new Animal();

var bigDog = new Dog("kfc");

console.log(bigDog.eat());
console.log(bigDog.bark());
