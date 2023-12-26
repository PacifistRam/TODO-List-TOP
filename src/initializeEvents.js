
import { createCategory } from "./createTodo";
import { renderTodoCategory,renderTodoContainer,renderTodoAddItemForm } from "./renderDom";

function submitTodoCategory(category) {
    createCategory(category);
}

const initializeEventListeners = (submitButton) => {
   
    submitButton.addEventListener('click',(e)=> {
        
        e.preventDefault();
        const input = document.querySelector('.category-input');
        const category = input.value;
        console.log(category);
        submitTodoCategory(category);
        renderTodoCategory();
    })


}

const intialzeCategoryClicked = (categoryList) => {
    categoryList.addEventListener('click',(e) => {
        const categoryItem = e.target.closest('.category-list-item').textContent;
        console.log(categoryItem);
        renderTodoContainer(categoryItem);
    })
}

const addButtonTodoItem = (addButton,categoryName) => {
    
    addButton.addEventListener('click',() => {
        renderTodoAddItemForm(categoryName);
    })
    
}

export default initializeEventListeners;
export { intialzeCategoryClicked,addButtonTodoItem }




