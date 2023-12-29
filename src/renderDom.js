import { todoCategories } from "./createTodo";
import { createCategoryElement,createTodoElement } from "./createDomElements";

// ----render category----------------///////////////////////////
const projectCategory = document.querySelector('.project-category');
const renderCategory = () => {

    projectCategory.textContent = '';
    todoCategories.forEach((category, index) => {
        //console.log(category.name);
        createCategoryElement(projectCategory, category, index);
    });

}
//-------------------------------------//////////////////////////

////------Render ToDo List----------------------------------/////
const tasks  = document.querySelector('.task');
const renderTodoList = (categoryName) => {
    const category = todoCategories.find((category) => category.name === categoryName);
    tasks.textContent = "";
    category.todoList.forEach((todo,index) => {
        createTodoElement(tasks,categoryName,todo,index)
    })
}

export { renderCategory,renderTodoList };