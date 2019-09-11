function Foo(name) {
  // this = {}
  this.name = name;
  // return this
}

var f = new Foo("dahl");

var obj = {
  name: "A",
  printName: function() {
    console.log(this.name);
  }
};

obj.printName(); // this === obj

// this === window
function fn(log) {
  console.log(log);
}

function fn1(name, age) {
  console.log(name);
  console.log(this);
}

// 执行函数并修改函数里的this，最后给函数带参数
fn1.call({ x: 100 }, "dahl", 20);
