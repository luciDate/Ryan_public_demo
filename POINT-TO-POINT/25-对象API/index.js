var obj = {
  x: 100,
  y: 200,
  z: 300
};

var key;
for (key in obj) {
  //遍历实列obj自身的属性，不包括原型链
  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]); //动态键名取值
  }
}
