// forEach 遍历所有数组
// every 判断所有元素是否都符合条件
// some 判断至少一个元素符合条件
// sort 排序
// map 按照一定规则映射为一个新的数组
// filter 过虑符合条件的元素

var arr = [1, 2, 3, 4, 5];
arr.forEach((item, index) => {
  console.log(index + "-" + item);
});

var resultI = arr.every((item, index) => {
  if (item < 4) {
    return true;
  }
});

console.log(resultI);

var resultII = arr.some((item, index) => {
  if (item < 4) {
    return true;
  }
});

console.log(resultII);

var arrI = arr.sort((a, b) => {
  //小到大
  return a - b;
  //大到小
  return b - a;
});

var arrIII = arr.map((item, index) => {
  return "<b>" + item + "</b>";
});

var arrIV = arr.filter((item, index) => {
  if (item > 2) {
    return true;
  }
});
