// Async normal

// async函数返回一个 Promise 对象，可以使用then方法添加回调函数
//当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句
function timeout(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("all waiting 3000");
    }, ms);
  });
}

async function asyncPrint(value, ms) {
  let iii = await timeout(ms);
  console.log(iii);
  console.log(value);
}

asyncPrint("hello world", 3000);

// async函数返回一个 Promise 对象。

// async函数内部return语句返回的值，会成为then方法回调函数的参数。

async function s() {
  return "heello world";
}
s().then(s => console.log(s));

async function e() {
  throw new Error("ERROR");
}
e.then(e => console.log(e));

class Sleep {
  constructor(timeout) {
    this.timeout = timeout;
  }
  then(resolve, reject) {
    const startTime = Date.now();
    setTimeout(() => {
      resolve(Date.now() - startTime);
    }, this.timeout);
  }
}

async () => {
  const sleepTime = await new Sleep(1000);
  console.log(sleepTime);
};

// 1000

// 上面代码中，await命令后面是一个Sleep对象的实例。
// 这个实例不是 Promise 对象，但是因为定义了then方法，await会将其视为Promise处理。

// 这个例子还演示了如何实现休眠效果。
// JavaScript 一直没有休眠的语法，但是借助await命令就可以让程序停顿指定的时间。下面给出了一个简化的sleep实现。

function sleep(interval) {
  return new Prommise(resolve => {
    setTimeout(resolve, interval);
  });
}

async function inAsync() {
  for (let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}
// 这个例子还演示了如何实现休眠效果。
// JavaScript 一直没有休眠的语法，但是借助await命令就可以让程序停顿指定的时间。
// 上面给出了一个简化的sleep实现。

//任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。
async function f() {
  await Promise.reject("出错了");
  await Promise.resolve("done"); // NO resolve
}

// 有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作
// 这时可以将第一个await放在try...catch结构里面
// 这样不管这个异步操作是否成功，第二个await都会执行

async function f() {
  try {
    await Promise.reject("ERROR");
  } catch (e) {}
  return await Promise.resolve("done");
}

f.then(v => console.log(v)); //// hello world

//下面的例子使用try...catch结构，实现多次重复尝试。

const superagent = require("superagent");
const NUM_RETRIES = 3;

async function test() {
  let i;
  for (i = 0; i < NUM_RETRIES; ++i) {
    try {
      await superagent.get("http://google.com/this-throws-an-error");
      break;
    } catch (err) {}
  }
  console.log(i); // 3
}

test();

//多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。

let foo = await getFoo();
let bar = await getBar();

//上面代码中，getFoo和getBar是两个独立的异步操作（即互不依赖），
//被写成继发关系。这样比较耗时，因为只有getFoo完成以后，才会执行getBar，完全可以让它们同时触发

let [foo, bar] = await Promise.all([getFoo, getBar]);

//上面两种写法，getFoo和getBar都是同时触发，这样就会缩短程序的执行时间

async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async url => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}

// 上面代码中，虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行
// 外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出
