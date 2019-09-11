// 一般的执行上下文，分为
// 一段<script>或者一个函数
// 上下文有变量与函数的提升，表现为它会把声明的变量和函数放到上下文的顶部，可以先使用在声明

a = 10;
console.log(a);

log("xixi");
function log(log) {
  console.log(log);
}

// 而表达式的声明不会进行，上下文提升

// error
console.log(b);
var b = "xixi";

//error
c("xixi");
var c = function(log) {
  console.log(log);
};
