# todo-list-TOP
todo list project for The Odin Project
This project stores all todo in an array having objects which form the category.
Each object is intialized with an empty array which i s filled with actual todos with its data fields such as title,description, date etc.
currently its having ab issue regarding local storage which needs to be fixed
Something Ive came up with by sepearting constructors from their functions
## Todo Management Functions 
```Javascript
function addTodoToCategory(category, title, description, dueDate, priority) {
  const newTodo = new TodoItem(title, description, dueDate, priority);
  category.todoList.push(newTodo);
  // saveToLocalStorage();
  console.log(`ToDo added to category "${category.name}"`);
}

function createCategory(name) {
  if (!doesCategoryExist(name)) {
    const category = new TodoCategory(name);
    todoCategories.push(category);
    // saveToLocalStorage();
    console.log(`Category "${name}" created`);
  } else {
    console.log(`Category with "${name} already exists"`);
  }
}

function addTodoToExistingCategory(categoryName, title, description, dueDate, priority) {
  const category = todoCategories.find((category) => category.name === categoryName);

  if (category) {
    addTodoToCategory(category, title, description, dueDate, priority);
  } else {
    console.log(`Category "${categoryName}" doesn't exist`);
  }
}

// Example usage:
// createCategory("Personal");
// addTodoToExistingCategory("Personal", "Buy groceries", "Milk, eggs, bread", "2024-01-15", "High");

