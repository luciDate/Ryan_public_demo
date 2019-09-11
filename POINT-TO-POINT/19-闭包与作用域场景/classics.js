function isFirstLoad() {
  var _list = [];
  return function(id) {
    // indexof 找不到返回-1 找得到返回数组下标
    if (_list.indexOf(id) >= 0) {
      return false;
    } else {
      _list.push(id);
      return true;
    }
  };
}

var firstLoad = isFirstLoad();
firstLoad(10); // -> true
firstLoad(10); // -> false
firstLoad(20); // -> true
firstLoad(20); // -> false

// 在函数外面的操作，改变不了函数里面的值
