const input=document.querySelector("#taskInput");
const button=document.querySelector("#addBtn");
const list=document.querySelector("#taskList");

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        button.click(); // triggers the same add button functionality
    }
});



button.addEventListener("click",function(){
    const task= input.value;

    if(task===""){
        alert("Please enter a task");
        return;
    }

    const li= document.createElement("li");
    li.innerText=task;

    li.addEventListener("click", function(){
        li.classList.toggle("completed");
        saveTasks();
    });

    const delBtn= document.createElement("button");
    delBtn.innerText="Delete";

    delBtn.addEventListener("click", function(e){
       e.stopPropagation();
        li.remove();
        saveTasks();
    });

    

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value="";

    console.log(li);
});

