import { getFilters } from "./filters";
import { getTodos, toggleTodo, removeTodo } from "./todos";

const rendertodos = () => {
    const todos = getTodos()
    const filtersObj = getFilters()
    let filteredTodos = todos.filter((todo) =>
       todo.text.toLowerCase().includes(filtersObj.searchText.toLowerCase())
    );
 
    filteredTodos = filteredTodos.filter(
       (todo) => !filtersObj.hideCompleted || !todo.completed
    );
 
    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);
    const divWithIdTodos = document.querySelector("#todos"); // because we locate this div four times in this function
 
    divWithIdTodos.innerHTML = ""; //clear todos
    divWithIdTodos.appendChild(generateSummaryDOM(incompleteTodos));
 
    if(filteredTodos.length > 0){
       filteredTodos.forEach((todo) => {
          divWithIdTodos.appendChild(generateTodoDOM(todo));
       });
    } else {
       const emptyMessage = document.createElement("p")
       emptyMessage.classList.add("empty-message")
       emptyMessage.textContent = "No to-dos to show"
       divWithIdTodos.appendChild(emptyMessage)
    }
 };


const generateTodoDOM = (todo) => {
    const rootDiv = document.createElement("label");
    const containerEl = document.createElement("div")
    const checkbox = document.createElement("input");
    const button = document.createElement("button");
    const todoEl = document.createElement("span");
 
    //set up todo checkbox
    checkbox.setAttribute("type", "checkbox");
    checkbox.checked = todo.completed;
    containerEl.appendChild(checkbox);
    checkbox.addEventListener("change", () => {
       toggleTodo(todo.id) //toggle checkbox (save() is in function)
       rendertodos();      //then rerender
    });
 
    //set up todo text
    todoEl.textContent = todo.text;
    containerEl.appendChild(todoEl)
 
    //container
    rootDiv.classList.add("list-item")
    containerEl.classList.add("list-item__container")
    rootDiv.appendChild(containerEl)
    
    //set up remove button
    button.textContent = "remove";
    button.classList.add("button", "button--secondary")
    rootDiv.appendChild(button);
 
    button.addEventListener("click", () => {
       removeTodo(todo.id);
       rendertodos();
    });
    
    return rootDiv;
 };
 

//Todos left message
const generateSummaryDOM = (incompleteTodos) => {
    const todoMessage = document.createElement("h2");
    todoMessage.classList.add("list-title")
    const things = incompleteTodos.length === 1 ? "thing" : "things" 
    todoMessage.textContent = `You have ${incompleteTodos.length} ${things} left to do`;
    
    return todoMessage;
 };
 

export { rendertodos, generateSummaryDOM}