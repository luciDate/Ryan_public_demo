console.log(1);
//setTimeout 是异步执行，不会阻塞代码
setTimeout(() => {
  console.log(3);
}, 1000);
console.log(2);

console.log(1);
//alert(2) // alert是同步执行，会阻塞代码
console.log(3);

// 前端使用异步的场景有：
// 异步的特点是他们都会等待
// 定时任务 setTimeout setInverval
// 网络请求：ajax 请求，动态<img>加载
// 事件绑定  //addeventlistener -> click -> alert()
