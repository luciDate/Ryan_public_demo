//异步单线程的特点，不能同时干两件事
//所以setTimeout里面的函数会暂存起来，不会立即执行;
//ajax，事件绑定，里面的函数一样会暂存起来，等到脚本执行结束，处于空闲状态，才会回去执行暂存函数
console.log(1);
setTimeout(() => {
  console.log(4);
}, 0);
console.log(2);
setTimeout(() => {
  console.log(5);
}, 1000);
console.log(3);

console.log("start");
document.getElementById("btn1").addEventListener("click", function() {
  console.log("log");
});
console.log("end");
