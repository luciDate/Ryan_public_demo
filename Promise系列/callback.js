function add(num1, num2, callback) {
  let sum = (num1 += num2);
  callback(sum);
}

function print(num) {
  console.log(num);
}

add(1, 2, print);
