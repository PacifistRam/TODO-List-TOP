
import { createCategory } from "./createTodo";

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



export default initializeEventListeners;




