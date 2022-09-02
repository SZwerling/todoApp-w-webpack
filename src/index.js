import { createTodo } from "./todos";
import { getFilters, setFilters } from "./filters";
import { rendertodos } from "./views";



//render initial todos
rendertodos()


const filters = getFilters()


//event listener for filter todos by text
document.querySelector("#filter-todos").addEventListener("input", (e) => {
    setFilters({
        searchText: e.target.value
    })
    rendertodos();
 });


//event listener for hide completed todos
document.querySelector("#hide-completed").addEventListener("change", (e) => {
    setFilters({ hideCompleted: e.target.checked })
    rendertodos();
 });
 

//set up form submission handler
 document.querySelector("#add-todo").addEventListener("submit", (e) => {
    e.preventDefault();
    let newTodo = e.target.elements.newTodo.value.trim()
    // createTodo(newTodo)
    createTodo(newTodo)
    e.target.elements.newTodo.value = "";
    rendertodos();
});
   
 


 








// Bonus: Add a watcher for local storage