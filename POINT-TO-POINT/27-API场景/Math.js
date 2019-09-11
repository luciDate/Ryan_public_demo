//截取随机10位固定长度的浮点数
var random = Math.random();
random = random + "0000000000";
random = random.slice(0, 10);
console.log(random);
