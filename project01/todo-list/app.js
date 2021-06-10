//Selector
const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//Functions

function addTodo(event) {
    //Prevent form from submitting
    event.preventDefault();
    //create todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo')
    //create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //CHECK MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('completed-btn');
    todoDiv.appendChild(completedButton);
    //CHECK trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //clear todo input value
    todoInput.value = '';
}

function deleteCheck(e){
    console.log(e.target);
    const item = e.target;
    //delete todo
    if (item.classList[0]==="trash-btn"){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    //check mark
    if (item.classList[0]==="completed-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterTodo(e){
    const todo = todoList.childNodes;
    todo.forEach(function(todo){
        switch (e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")){
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display ='flex';
                } else {
                    todo.style.display = 'none';
                } 
                break;
        }
    });

}


