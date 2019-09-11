function F1() {
  var a = 100;
  return function() {
    console.log(a);
  };
}

var f1 = F1();

function F2(fn) {
  var a = 200;
  fn();
}

F2(f1); // a = 100
