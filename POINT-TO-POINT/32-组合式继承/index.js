//混合继承函数
//不确定多少的个参数的用余下操作符
//余下操作符会在参数栏里搜集一个参数数组，函数内使用余下操作符会将数组分解成一个个参数
function mixin(target, ...sources) {
  Object.assign(target, ...sources);
}

const canEat = {
  eat: function() {
    this.hunger--;
    console.log("eating");
  }
};

const canWalk = {
  walk: function() {
    console.log("walking");
  }
};

const canSwim = {
  swim: function() {
    console.log("swiming");
  }
};

function Person() {}
mixin(Person.prototype, canEat, canWalk);

const p = new Person();
console.log(p.eat());

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);
const f = new Goldfish();
console.log(f.swim());
