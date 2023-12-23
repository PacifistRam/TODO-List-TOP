import initializeEventListeners from "./initializeEvents";
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

    // submitButton.addEventListener('click',(e)=> {
    //     e.preventDefault();
    //     const input = document.querySelector('.category-input');
    //     const category = input.value;
    //     console.log(category);

    //     submitTodoCategory(category);
    //     console.log(todoCategories);
    //     renderTodoCategory();
    // })
    

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
    } else {
        console.log(`Category "${categoryName}" not found`);
    }

}

export default CreateTodoContainer;
export {renderTodoCategory,renderTodoContainer};