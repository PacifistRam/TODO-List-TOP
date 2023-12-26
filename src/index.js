console.log("hello World");
const container = document.querySelector('#container');
const todoItemContainer = document.createElement('div');
todoItemContainer.classList.add('todo-item-container')
import {todoCategories,TodoItem,TodoCategory,doesCategoryExist,createCategory,addTodoCategory} from "./createTodo"
import CreateTodoContainer from "./renderDom";
import { renderTodoCategory,renderTodoContainer } from "./renderDom";



container.appendChild(CreateTodoContainer());
container.appendChild(todoItemContainer);


//-------testing function calls
createCategory("shopping");
addTodoCategory(
    "shopping",
    "Buy Groceries",
    "Milk, Bread, eggs",
    "20/12/23",
    "High"
  );
  addTodoCategory(
    "shopping",
    "Buy Clothes",
    "Shirts, Pants, Belt",
    "24/12/23",
    "High"
  );
  
  
  addTodoCategory(
    "doesnt Exist",
    "Buy Clothes",
    "Shirts, Pants, Belt",
    "24/12/23",
    "High"
  );
  
  createCategory("House chores");
  addTodoCategory(
    "House chores",
    "house works",
    "cleaning, washing car,mawning laun ",
    "20/12/23",
    "High"
  );
  console.log(todoCategories);
  console.log(todoCategories);

  //////-----------------------////////////

  renderTodoCategory();
  
  //renderTodoContainer('House chores');