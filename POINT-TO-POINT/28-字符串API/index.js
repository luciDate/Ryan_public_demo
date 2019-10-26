let str = "abcdfefg";

console.log(str.length);
console.log(str.indexOf("c"));
console.log(str.indexOf("z")); //没找到返回-1
console.log(
  str
    .split("")
    .reverse()
    .join("")
);
console.log(str.slice(1)); //规定从何处开始选取
console.log(str.slice(-1)); //倒序选取
console.log(str.split("").slice(1, 4)); //从第一个1开始，第四个结束
console.log(str.substr(3)); //字符串截取

let strI = " dahl ";
console.log(strI.trim());

let num = 123;

console.log(`num is ${num}`);

const NAMES = ["xiaoming", "xiaohong", "xiaobai"];

let strIII = `<ul>${NAMES.map(name => `<li>i am ${name}</li>`)}</ul>`;

console.log(strIII);
