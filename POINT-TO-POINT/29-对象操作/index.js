let animal = {
  name: "dog",
  age: 10
};

animal.color = { color: "yeollw" };

var str = "age";

delete animal[str];

console.log(animal);

Object.defineProperty(animal, "name", {
  //只读
  writable: false,
  //是否枚举
  enumerable: false,
  //是否可删除
  configurable: false
});

animal.name = "cat";
console.log(animal.name);
delete animal.name;
console.log(Object.keys(animal));
