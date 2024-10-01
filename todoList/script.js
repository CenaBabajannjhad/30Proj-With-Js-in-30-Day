const form = document.querySelector("#form");
const inputForm = document.querySelector("#input-form");
const todosPlace = document.querySelector(".section-todos");
const addBtn = document.querySelector("#add");
let isEditMode = false;
let targetTitle;

form.addEventListener("submit", (e) => {
  // when form submited
  e.preventDefault();

  // if edit action clicked
  if (isEditMode) {
    // get new input value
    let newInputValue = getInputValue(inputForm);
    // set new input value in out todo textcontent
    targetTitle.textContent = newInputValue;
    // reset the input
    resetInputValue(inputForm);
    // and is edit mode turn to false
    isEditMode = false;
 
  } else {
    // give input value
    const inputValue = getInputValue(inputForm);
    // append todo to DOM
    if (inputValue) todosPlace.appendChild(todoGenerator(inputValue));
    // reset input form
    resetInputValue(inputForm);
  }
});

// return input value
function getInputValue(element) {
  return element.value;
}
// reset input value
function resetInputValue(element) {
  element.value = "";
}
// set input value
function setInputValue(input, value) {
  input.value = value;
}
// todo genarator
function todoGenerator(title = "todoTitle") {
  const todoContainer = document.createElement("div");
  const todoTitle = document.createElement("h2");
  const todoActionsWrapper = document.createElement("div");
  const todoDeleteActionBtn = document.createElement("button");
  const todoEditActionBtn = document.createElement("button");
  const todoCompleteActionBtn = document.createElement("button");

  todoContainer.className = "todo-template";
  todoTitle.textContent = title;
  todoDeleteActionBtn.textContent = "delete";
  todoEditActionBtn.textContent = "edit";
  todoCompleteActionBtn.textContent = "complete";
  todoDeleteActionBtn.id = "delete";
  todoEditActionBtn.id = "edit";
  todoCompleteActionBtn.id = "complete";

  todoContainer.appendChild(todoTitle);
  todoContainer.appendChild(todoActionsWrapper);
  todoActionsWrapper.appendChild(todoDeleteActionBtn);
  todoActionsWrapper.appendChild(todoEditActionBtn);
  todoActionsWrapper.appendChild(todoCompleteActionBtn);

  todoActionsWrapper.addEventListener("click", todoActionsHandler);

  return todoContainer;
}

function todoActionsHandler(e) {
  switch (e.target.id) {
    case "delete":
      // if delete button clicked remove this element from DOM   
      e.target.parentElement.parentElement.remove();
      break;

    case "complete":
      // if complete button clicked toggle completed class list for gray color and styles
      e.target.parentElement.previousElementSibling.classList.toggle(
        "completed"
      );
      break;

    case "edit":
      // if edit button clicked isEditMode turn to true and form eventHandler become edit form 
      isEditMode = true;
      // send for form target title for set new title    
      targetTitle = e.target.parentElement.previousElementSibling;
      // set current input value to input value for use change it    
      setInputValue(inputForm, targetTitle.textContent);
      break;
  }
}
