import './style.css';
import { todoCategories,TodoItem,TodoCategory,createCategory,doesCategoryExist,addTodoToCategory} from './createTodo';
import { renderCategory,renderTodoList } from './renderDom';
import { addCategoryButtonEventListener,eventToRenderList} from './initializeEvents'









//-------test function calls----------------------////
addCategoryButtonEventListener();
createCategory("shopping");
addTodoToCategory('shopping','buy clothes','need to buy some new shirts','30-12-2023','mid');

renderCategory();
eventToRenderList();
// setTimeout(()=> {

// },0);
console.log(todoCategories);