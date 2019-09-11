// this 要在执行时才能确认值（比如函数执行），定义时无法确认
var a = {
  name: "A",
  fn: function() {
    console.log(this.name);
  }
};

a.fn(); // this === "A"

//call() -> 执行前一个函数并且修改this的值,一般函数内this的值为一个{}                                                                                       qqqqqqqqqqq

a.fn.call({ name: "B" }); // this === {name:"B"}

var fn1 = a.fn;
fn1(); // this --> window

//bind也可以修改this
var fn2 = function(name, age) {
  console.log(name);
  console.log(this);
}.bind({ y: 200 });

fn2("dahl", 20);
