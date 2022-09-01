// Setup the empty todos array
let todos = []

// get saved todos from local storage
const loadTodos = () => {
    const todosJson = localStorage.getItem("todos");
    try {
       return todosJson ? JSON.parse(todosJson) : []
    } catch(e) {
       return []
    }
    
 };



// saveTodos
// Arguments: none
// Return value: none
// save todos to local storage
const saveTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
 };

// getTodos
// Arguments: none
// Return value: todos array
// EXPOSE TODOS FROM MODULE
const getTodos = () => todos;

// createTodo
// Arguments: todo text
// Return value: none
const createTodo = (newTodo) => {
    let id = uuidv4()
    if(newTodo.length > 0){
        todos.push({
           id: id,
           text: newTodo,
           completed: false,
        });
        saveTodos();
    }
    return id;
 };


// removeTodo
// Arguments: id of todo to remove
// Return value: none
const removeTodo = (id) => {
    let index = todos.findIndex((todo) => todo.id === id);
    if (index > -1) {
       //if statement not really necessary// button created with todo with id so id must exist
       todos.splice(index, 1);
       saveTodos()
    }
   
 };
 

// toggleTodo
// Arguments: id of todo to toggle
// Return value: none
const toggleTodo = (id) => {
    const selectedTodo = todos.filter((todo) => todo.id === id)[0]
    selectedTodo.completed = !selectedTodo.completed
    console.log(selectedTodo.completed)
    saveTodos()
}

todos = loadTodos()

export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo }
