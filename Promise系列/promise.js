//Promise normal

const promise = new Promise((resolve, reject) => {
  let num = Math.random() * 2;
  if (num > 1) {
    resolve(num);
  } else {
    // reject("fail");
  }
});

//Promise then parameter
// then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）
// 因此可以采用链式写法，即then方法后面再调用另一个then方法
// 第一个回调函数完成以后，会将返回结果作为参数，传入第二个回调函数

const wait = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done");
  }, 3000);
});

wait
  .then(message => console.log(message))
  .then(() => {
    return Promise.resolve(100);
  })
  .then(num => console.log(num));

//Promise catch
//捕捉resolve返回的异常
// 一般总是建议，Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误
// catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法

// const someAsync = function() {
//   return new Promise((resolve, reject) => {
//     //x没有定义
//     resolve(x + 2);
//   });
// };

// someAsync()
//   .catch(error => {
//     console.log("oh,no", error);
//   })
//   .then(() => {
//     console.log("carry on");
//   });

//Promise finally
//finally方法用于指定不管 Promise 对象最后状态如何，都会执行的操作
//下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器

// server.listen(port)
//   .then(function () {
//     // ...
//   })
//   .finally(server.stop);

//Promise all and race

//Promise.all方法用于将多个 Promise 实例，包装成一个新的 Promise 实例

// 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数

// 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

// 下面是一个具体的例子

const databasePromise = connectDatabase();

const booksPromise = databasePromise.then(findAllBooks);

const userPromise = databasePromise.then(getCurrentUser);

Promise.all([booksPromise, userPromise]).then(([books, user]) =>
  pickTopRecommendations(books, user)
);

// 上面代码中，booksPromise和userPromise是两个异步操作
// 只有等到它们的结果都返回了，才会触发pickTopRecommendations这个回调函数

//注意，如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

const p1 = new Promise((resolve, reject) => {
  resolve("hello");
}).then(result => result);

const p2 = new Promise((resolve, reject) => {
  throw new Error("报错了");
}).then(result => result);

Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(e => console.log(e));

//Promise.race()

const p = Promise.race([p1, p2, p3]);

const p = Promise.race([
  fetch("/resource-that-may-take-a-while"),
  new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("request timeout")), 5000);
  })
]);

p.then(console.log).catch(console.error);

//上面代码中，如果 5 秒之内fetch方法无法返回结果，变量p的状态就会变为rejected，从而触发catch方法指定的回调函数。

//Promise resolve

// Promise.resolve('foo')
// 等价于
// new Promise(resolve => resolve('foo'))

// 需要注意的是，立即resolve()的 Promise 对象
// 是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时

setTimeout(function() {
  console.log("three");
}, 0);

Promise.resolve().then(function() {
  console.log("two");
});

console.log("one");

// one
// two
// three

//Promise reject

const p = Promise.reject("出错了");

const thenable = {
  then(resolve, rejrct) {
    reject("出错了");
  }
};

Promise.reject(thenable).catch(e => console.log(e === thenable));

//注意，Promise.reject()方法的参数，会原封不动地作为reject的理由，变成后续方法的参数。这一点与Promise.resolve方法不一致。
// 上面代码中，Promise.reject方法的参数是一个thenable对象
// 执行以后，后面catch方法的参数不是reject抛出的“出错了”这个字符串，而是thenable对象

//加载图片

const preloadImage = function(path) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = resolve;
    image.onerror = reject;
    image.src = path;
  });
};
