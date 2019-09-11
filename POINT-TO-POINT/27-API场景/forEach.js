// 遍历数组加对象

function forEach(obj, fn) {
  var key;
  if (obj instanceof Array) {
    obj.forEach((item, index) => {
      fn(index, item);
    });
  } else {
    for (key in obj) {
      fn(key, obj[key]);
    }
  }
}

var arr = [1, 2, 3];
forEach(arr, function(index, item) {
  console.log(index, item);
});

var obj = { x: 100, y: 200 };
forEach(obj, function(key, value) {
  console.log(key, value);
});
