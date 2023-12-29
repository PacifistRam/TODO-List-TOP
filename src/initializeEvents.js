import { todoCategories } from "./createTodo"
import { renderCategory,renderTodoList } from "./renderDom"
import { createCategory } from "./createTodo"


export const addCategoryButtonEventListener = () => {
    const addCategoryForm = document.querySelector('.add-category')
    const addCategoryInput = document.querySelector('.add-category-input')
    addCategoryForm.addEventListener('submit',(e) =>{
        e.preventDefault();
       const categoryName = addCategoryInput.value;
       if(categoryName != '') 
       {
        
           console.log(categoryName);
           createCategory(categoryName);
           renderCategory();
           console.log(todoCategories);
           addCategoryInput.value = '';
       }
       else {
        console.log("Field can't be empty");
       }
    })
}

export const eventToRenderList = () => {
    const projectCategory = document.querySelector('.project-category');
    projectCategory.addEventListener('click',(e) => {

        const clickedLi =  e.target.closest('span');
      if(clickedLi) {  
        const categoryName = clickedLi.textContent
        console.log(clickedLi.textContent);
         renderTodoList(categoryName);
    }
    })
}

export const addDeleteCategoryButtonEventListener = (button,index) => {
    button.addEventListener('click', () => {
        todoCategories.splice(index,1)
        renderCategory();
        console.log(todoCategories);
    });
};

