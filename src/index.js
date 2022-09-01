import { createTodo } from "./todos";
import { getFilters, setFilters } from "./filters";
import { rendertodos } from "./views";
import './styles/styles.css'


// Render initial todos
rendertodos()


// Set up search text handler
const filters = getFilters()
//event listener for filter todos
document.querySelector("#filter-todos").addEventListener("input", (e) => {
    filters.searchText = e.target.value;
    rendertodos();
 });


 // Set up checkbox handler
//event listener for hide completed todos
document.querySelector("#hide-completed").addEventListener("change", (e) => {
    setFilters({ hideCompleted : e.target.checked })
    rendertodos();
 });
 


// Set up form submission handler
 document.querySelector("#add-todo").addEventListener("submit", (e) => {
    e.preventDefault();
    let newTodo = e.target.elements.newTodo.value.trim()
    // createTodo(newTodo)
   createTodo(newTodo)
       e.target.elements.newTodo.value = "";
       rendertodos();
    })
   
 


 








// Bonus: Add a watcher for local storage