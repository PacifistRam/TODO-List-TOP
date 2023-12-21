const todoCategories = [];


function TodoItem(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.isDone = false;

  this.toggleDone = function () {
    this.isDone = !this.isDone;
  };
}

function TodoCategory(name) {
  this.name = name;
  this.todoList = [];

  this.addTodoItem = function (title, description, dueDate, priority) {
    const newTodo = new TodoItem(title, description, dueDate, priority);
    this.todoList.push(newTodo);
  };
}

function doesCategoryExist(name) {   // function to check whether category exists or not
  return todoCategories.some((category) => category.name == name);
}
function createCategory(name) {
  // function creates categories dynamically
  if (!doesCategoryExist(name)) {
    const category = new TodoCategory(name);
    todoCategories.push(category);
    console.log(`category "${name}" created`);
  } else {
    console.log(`category with"${name}" already exists`);
  }
}

function addTodoCategory(categoryName, title, description, dueDate, priority) {
  const category = todoCategories.find(
    (category) => category.name === categoryName
  );

  if (category) {
    category.addTodoItem(title, description, dueDate, priority);
    console.log(`Todo added to category "${categoryName}!"`);
  } else {
    console.log(`category "${categoryName}! not found"`);
  }
}

export { todoCategories,TodoItem,TodoCategory,doesCategoryExist,createCategory,addTodoCategory}