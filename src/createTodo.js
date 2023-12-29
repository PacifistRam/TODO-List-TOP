

const todoCategories = [];

//---------Constructor functions----------------------------
function TodoItem(title,description,dueDate,priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isDone = false;

  this.toggleDone =  function() {
      this.isDone = !this.isDone;
      //saveToLocalStorage();
  }

}

function TodoCategory(name) {
  this.name =  name;
  this.todoList = [];

  this.addTodoItem = function (title,description,dueDate,priority) {
      const newTodo = new TodoItem(title,description,dueDate,priority)
      this.todoList.push(newTodo);
     // saveToLocalStorage();
  };
}

///-------------------------------------------------------

///---Create Category and add todo to category Functions-----------------------------////////////

function doesCategoryExist(name){ 
  return todoCategories.some((category) => category.name == name);
}

function createCategory(name) {
  if(!doesCategoryExist(name)){
      const category = new TodoCategory(name);
      todoCategories.push(category);
      //saveToLocalStorage();
      console.log(`Category "${name}" created`);
  }
  else {
      console.log(`category with "${name} already exists"`)
  }
}

function addTodoToCategory(categoryName,title,description,dueDate,priority) {
  const category = todoCategories.find((category) => category.name === categoryName);

  if(category) {
      category.addTodoItem(title,description,dueDate,priority)
      //saveToLocalStorage()
      console.log(`ToDo added to category "${categoryName}"`);
  } else {
      console.log(`Category "${categoryName}" doesn't Exist`);
  }
}
////-----------------___--------------------------////////
export {todoCategories,TodoItem,TodoCategory,createCategory,addTodoToCategory};