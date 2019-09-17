// 用静态方法创建不属于具体实列的工具函数

class Person {
  constructor(name) {
    this.name = name;
  }
  static parse(str) {
    return JSON.parse(str);
  }
}

console.log(Person.parse('{"name":"dahl"}'));
