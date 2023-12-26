import initializeEventListeners from "./initializeEvents";
import { intialzeCategoryClicked, addButtonTodoItem} from "./initializeEvents";
import {todoCategories} from "./createTodo";
import {createCategory} from "./createTodo"

const CreateTodoContainer =() => {
    const displayCategory = document.createElement('div');
    displayCategory.classList.add('category-block');
    const categoryList = document.createElement('ul');
    categoryList.classList.add('category-list');
    const submitForm = document.createElement('form');
    submitForm.classList.add('form');
    const input = document.createElement('input');
    input.classList.add('category-input')
    const submitButton = document.createElement('button');
    submitButton.textContent = 'submit';

    submitForm.appendChild(input);
    submitForm.appendChild(submitButton);
    displayCategory.appendChild(submitForm);
    displayCategory.appendChild(categoryList);
    initializeEventListeners(submitButton);
    

    return displayCategory;
}

function renderTodoCategory () {
    const categoryList = document.querySelector('.category-list');
    categoryList.textContent = '';
    todoCategories.forEach((category) => {
        const categoryListItem = document.createElement('li');
        categoryListItem.classList.add('category-list-item');
        categoryListItem.textContent = category.name;
        categoryList.appendChild(categoryListItem);
    })
    intialzeCategoryClicked(categoryList); 
}

function submitTodoCategory(category) {
    createCategory(category);
}

function renderTodoContainer(categoryName) {
    const todoItemContainer = document.querySelector('.todo-item-container')
    todoItemContainer.textContent = '';
    const category = todoCategories.find((cat) => cat.name === categoryName)
    if(category) {

        category.todoList.forEach(todo => {
            const todoSingleItemContainer = document.createElement('div');
            const todoTitle = document.createElement('h3')
            todoTitle.textContent = todo.title; 
            const todoDescription = document.createElement('p')
            todoDescription.textContent = todo.description; 
            const todoDueDate = document.createElement('p')
            todoDueDate.textContent = todo.dueDate; 
            todoSingleItemContainer.append(todoTitle,todoDescription,todoDueDate)
            todoItemContainer.appendChild(todoSingleItemContainer);
        })

        const addButton = document.createElement('button')
        addButton.classList.add('add-todo-button');
        addButton.textContent = "ADD";
        todoItemContainer.appendChild(addButton);
        addButtonTodoItem(addButton);
    } else {
        console.log(`Category "${categoryName}" not found`);
    }

}

function renderTodoAddItemForm(categoryName) {
    const todoItemContainer = document.querySelector('.todo-item-container');
    const todoAddItemFormContainer = document.querySelector('div');
    todoAddItemFormContainer.classList.add('todo-item-form-container')
    const todoAddItemForm = document.createElement('form');
    todoAddItemForm.classList.add('add-todo-form');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    const todoTitle = document.createElement('input');
    todoTitle.type = "text";
    titleLabel.setAttribute('for',todoTitle);
    
    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    const todoDescription = document.createElement('input');
    todoDescription.type = "text";
    descriptionLabel.setAttribute('for',todoDescription);
    
    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'DueDate';
    const todoDueDate = document.createElement('input');
    todoDueDate.type = "date";
    dueDateLabel.setAttribute('for',todoDueDate);
    
    const addTodoButton = document.createElement('button');
    addTodoButton.type = "submit";
    addTodoButton.textContent = "ADD";

    const resetTodoButton = document.createElement('button');
    resetTodoButton.type = "reset";
    resetTodoButton.textContent = "RESET";

    todoAddItemForm.append(titleLabel,todoTitle,descriptionLabel,todoDescription,dueDateLabel,todoDueDate,addTodoButton,resetTodoButton)

    todoAddItemFormContainer.appendChild(todoAddItemForm);

   todoItemContainer.appendChild(todoAddItemFormContainer);


    
};



export default CreateTodoContainer;
export {renderTodoCategory,renderTodoContainer,renderTodoAddItemForm};