import { addDeleteCategoryButtonEventListener } from "./initializeEvents";



function createCategoryElement (container,category,index) {
    const categoryList = document.createElement('li');
    const categoryName = document.createElement('span');
    const deleteCategoryButton = document.createElement('button');
    categoryName.textContent = category.name;
        deleteCategoryButton.className = 'delete-button'
        deleteCategoryButton.textContent = `\u{1F5D1}`;
       
        addDeleteCategoryButtonEventListener(deleteCategoryButton,index);
        
        categoryList.append(categoryName,deleteCategoryButton);container.appendChild(categoryList);
}
/////------------------------------------------------////////////

function createTodoElement (container,categoryName,todo,index) {
     // create elements for task class
     const todoItem = document.createElement('div')
     todoItem.classList.add('todo-item')
     const todoItemHeader = document.createElement('div')
     todoItemHeader.classList.add('todo-item-header')
     const moreInfo = document.createElement('div')
     moreInfo.classList.add('more-info')
     const checkboxSpan = document.createElement('span');
     checkboxSpan.classList.add('checkbox-span')

    //checkbox element for isDone
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox'
    checkbox.checked = todo.isDone; //attach checked state to isDone true
    checkbox.id = `checkbox-${index}`;

    //Label for checkbox
    const todoTitleLabel = document.createElement('label');
    todoTitleLabel.textContent = todo.title;


    todoTitleLabel.setAttribute('for', `checkbox-${index}`);
    checkbox.addEventListener('change', () => {
        todo.toggleDone();

        renderTodoList(categoryName);
    });

     //delete button 
     const deleteTaskButton = document.createElement('button');
     deleteTaskButton.classList.add('delete-button')
     deleteTaskButton.textContent = `\u{1F5D1}`;


     //---moreInfo section----------//
     const todoDescription = document.createElement('p');
       todoDescription.classList.add('todo-description'); 
       const todoDueDate = document.createElement('p');
       todoDueDate.classList.add('todo-due-date'); 
       const todoPriority = document.createElement('p');
       todoPriority.classList.add('todo-priority'); 

       //----append textContent with TODO's
       todoDescription.textContent = todo.description;
       todoDueDate.textContent = todo.dueDate;
       todoPriority.textContent =`"Priority:${todo.priority}"`;

       //------Append To Container--------//
       checkboxSpan.append(checkbox,todoTitleLabel) 
       todoItemHeader.append(checkboxSpan,todoPriority,deleteTaskButton);
       moreInfo.append(todoDescription,todoDueDate);
       todoItem.appendChild(todoItemHeader);
       todoItem.appendChild(moreInfo);
       container.appendChild(todoItem);
        console.log(todo.title);

        //check for isTodoDone
        if(todo.isDone) {
            todoTitleLabel.style.textDecoration ='line-through';
            todoItem.style.backgroundColor ='lightgray';
            todoItem.style.opacity ='0.5';

        }
}





export {createCategoryElement,createTodoElement};