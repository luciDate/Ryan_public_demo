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
console.log(str.split("").slice(1, 4)); //从下标1开始，第四个结束

let strI = " dahl ";
console.log(strI.trim());

let num = 123;

console.log(`num is ${num}`);
