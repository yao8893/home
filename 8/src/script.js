function addcomment(){
  var comment=document.getElementById("comment");
if(comment.value==""){
  alert("請輸入評價!!");
}
else{
  var txtNode = document.createTextNode(comment.value);
  var li = document.createElement("li");
  li.appendChild(txtNode);
  var list = document.getElementById("list");
  list.appendChild(li);
 document.getElementById("peopleCount").innerText=list.children.length;
}
}

function Menu(number)
{
var menu=document.getElementById("menu-"+number);
menu.classList.toggle("hide");
}