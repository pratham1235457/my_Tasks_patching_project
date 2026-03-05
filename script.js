const addButton = document.querySelector("#add-btn");
const Input = document.querySelector("#todo-input");
const ToDoList = document.querySelector("#todo-list");

addButton.addEventListener("click", function(dets) {
    if(Input.value === "") {
        alert("Please enter a Task!");
        return;
    }

const newTask = document.createElement("li");
newTask.textContent = Input.value;

newTask.addEventListener("click", function() {
    newTask.style.textDecoration = "line-through";
    newTask.style.opacity = "0.5";
});

newTask.addEventListener("dblclick", function() {
    newTask.remove();
})

ToDoList.appendChild(newTask);
Input.value = "";
});