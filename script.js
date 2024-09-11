const inputValue = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const todoAlert = document.getElementById("Alert");

//add Task
function addTask() {
  if (inputValue.value === "") {
    //alert('Please add your task');
    todoAlert.innerText = "Please enter your task!";
    setTimeout(() => {
      todoAlert.innerText = "";
    }, 1000);
    inputValue.focus();
  } else {
    const newList = document.createElement("li");
    // Append the new list item to the todo list
    todoList.appendChild(newList);
    newList.innerHTML = `${inputValue.value} 
    <div class="fa-icon">
      <button class="edit">
                <i class="fas fa-edit"></i>
            </button>
        <button class="delete">
            <i class="far fa-trash-alt"></i>
        </button> </div>`;

    //Alert msg for adding list
    todoAlert.innerText = "Todo item created Successfully!";
    setTimeout(() => {
      todoAlert.innerText = "";
    }, 1000);
    deleteTask(newList);
    editTask(newList);
  }
  inputValue.value = "";
}

//delete Task
function deleteTask(newList) {
  //access delete button
  const deleteBtn = newList.querySelector(".delete");
  //call a function when the button will be clicked
  deleteBtn.addEventListener("click", () => {
    todoList.removeChild(newList);
  });
}

//edit Task
function editTask(newList) {
  const editBtn = newList.querySelector(".edit");
  editBtn.addEventListener("click", () => {
    const currentItem = newList.firstChild.textContent.trim();
    inputValue.value = currentItem;
    todoList.removeChild(newList);
    inputValue.focus();
  });
 }
