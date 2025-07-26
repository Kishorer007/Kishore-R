function addtodo(){
    var todoinput=document.getElementById("todo-input");
    var todotext=todoinput.value.trim();

    if(todotext !==""){
        var li=document.createElement("li");
        li.textContent=todotext;

        var deletebutton=document.createElement("button");
        deletebutton.textContent="Delete";
        deletebutton.classList.add("delete-btn");
        deletebutton.onclick=function(){
            li.remove();
        };
    li.appendChild(deletebutton);
    document.getElementById("todo-list").appendChild(li);

        todoinput.value="";

    }








}