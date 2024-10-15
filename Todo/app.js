const todoForm = document.getElementById('todo-form');
const formInput = document.querySelector('.form-input');
const clearAllTodosBtn = document.querySelector('.clear-all-todo-btn');
const todosContainer = document.querySelector('.todos-container');



// form event
todoForm.addEventListener('submit' , e => {
    e.preventDefault();
    let inputValue = fetchInputValue(formInput);
    if(inputValue){
        todosContainer.appendChild(todoGenerator(inputValue))
        resetInputValue(formInput);
        DeleteAllTodosBtn(clearAllTodosBtn , 'SHOW');
    }else{
        alert('add shomething...')
    }
})
// clear all todos event
clearAllTodosBtn.addEventListener('click' , () => clearAllTodos(todosContainer))

// todo generator
function todoGenerator(todo='todo'){
    const todoWraperElement = document.createElement('li');
    const todoSecContainer = document.createElement('div');
    const todotherContainer = document.createElement('div');
    const todoTitleContainer = document.createElement('div');
    const todoTitleElement = document.createElement('h4');
    const todoDeleteBtnContainer = document.createElement('div');
    const todoDeleteBtnElement = document.createElement('button');

    todoWraperElement.className = "row text-center todo-container";
    todoSecContainer.className = "container-fluid col-11 col-lg-7";
    todotherContainer.className = "col d-flex justify-content-between align-items-center todo-title-place";
    todoDeleteBtnElement.className = "todo-delete-btn";
    todoTitleElement.textContent = todo;
    todoDeleteBtnElement.textContent = 'delete';

    todoDeleteBtnElement.addEventListener('click' , () => {
        todoWraperElement.remove();
        if(todosContainer.childElementCount === 0){
            DeleteAllTodosBtn(clearAllTodosBtn , 'HIDE');
        }
    })

    todoWraperElement.appendChild(todoSecContainer);
    todoSecContainer.appendChild(todotherContainer);
    todotherContainer.appendChild(todoTitleContainer);
    todoTitleContainer.appendChild(todoTitleElement);
    todotherContainer.appendChild(todoDeleteBtnContainer);
    todoDeleteBtnContainer.appendChild(todoDeleteBtnElement);

    return todoWraperElement;
}
// show delete all todos btn
function DeleteAllTodosBtn(element , phase = 'SHOW'){
    if(phase === 'SHOW'){
        element.style.top = '20px';
        element.style.left = '20px';

    }else if(phase === 'HIDE'){
        element.style.top = '-10%';
        element.style.left = '-10%';

    }else{
        console.log('wrong phase , phases must be SHOW or HIDE');
    }
}
// fetch input value
function fetchInputValue(element){
    return element.value.trim();
}
// reset input value
function resetInputValue(element){
    element.value = null;
}
// clear all todos 
function clearAllTodos(parent){
    parent.innerHTML = null;
    DeleteAllTodosBtn(clearAllTodosBtn , 'HIDE')
}