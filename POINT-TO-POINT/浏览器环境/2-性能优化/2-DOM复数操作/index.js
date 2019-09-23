//合并DOM查询
let i;
let pList = document.getElementsByTagName("p");
for (i = 0; i < pList; i++) {
  pList[i].innerHTML = i;
}

//DOM合并插入
let listNode = document.getElementById("list");
//createdocumentfragment()方法创建了一虚拟的节点对象，节点对象包含所有属性和方法
let flag = document.createDocumentFragment();
let x, li;
for (x = 0; x < 10; x++) {
  li = document.createElement("li");
  li.innerHTML = `List item ${x}`;
  flag.appendChild(li);
}
listNode.appendChild(flag);
