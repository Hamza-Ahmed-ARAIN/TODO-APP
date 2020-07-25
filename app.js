var list =  document.getElementById("list");

function todo(){

  ////////////create li tag with text node//////////////

   var todo_item =  document.getElementById("todo-item");
   var li = document.createElement("li"); 
   var litext =document.createTextNode(todo_item.value);
   li.appendChild(litext);


  ////////////////create delete button///////////

  var delbtn = document.createElement("Button");
  var deltext = document.createTextNode("DELETE");
  delbtn.setAttribute("class","btn btn-danger");
  delbtn.appendChild(deltext);
  delbtn.setAttribute("onclick","deleteItem(this)");
  li.appendChild(delbtn);
 
 
  ///////////////////////create edit button//////////////////////////////////////

   
  var editbtn = document.createElement("Button" );
  var edittext = document.createTextNode("EDIT");
  editbtn.setAttribute("class","btn btn-danger")
  editbtn.appendChild(edittext);
  li.appendChild(editbtn);
  editbtn.setAttribute("onclick","editItem(this)")
 
 
  list.appendChild(li);
  todo_item.value = "";
  console.log(li);

}



function deleteItem(e){

    e.parentNode.remove();
}

function delall(){

    list.innerHTML="";
}

function editItem(e){

    var val = e.parentNode.firstChild;
    var editvalue = prompt("", e.parentNode.firstChild.nodeValue);
    val.nodeValue = editvalue
   
}