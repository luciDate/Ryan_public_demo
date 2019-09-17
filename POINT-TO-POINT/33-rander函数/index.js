function Rander() {}
//map 一个数组的值换成另一个格式的数组
Rander.prototype.randerSelect = function(arr) {
  return `<select>${arr
    .map(item => `<option>${item}</option>`)
    .join("")}</select>`;
};
Rander.prototype.randerImage = function(src) {
  return `<img src='${src}'>`;
};

let r = new Rander();
console.log(r.randerSelect([1, 2, 3]));
