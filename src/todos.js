// set up the empty todos array
let todos = [];

// get saved todos from local storage
const loadTodos = () => {
   const todosJson = localStorage.getItem("todos");
   try {
      return todosJson ? JSON.parse(todosJson) : [];
   } catch (e) {
      return [];
   }
};

todos = loadTodos();


// save todos to local storage
function saveTodos() {
   localStorage.setItem("todos", JSON.stringify(todos));
}


// EXPOSE TODOS FROM MODULE
const getTodos = () => todos;


const createTodo = (newTodo) => {
   let id = uuidv4();
   if (newTodo.length > 0) {
      // andrew just starts with todos.push and no if
      todos.push({
         id: id,
         text: newTodo,
         completed: false,
      });
      saveTodos();
   }
   return id;
};


const removeTodo = (id) => {
   const index = todos.findIndex((todo) => todo.id === id);
   //  if (index > -1) {
   //     //if statement not really necessary// button created with todo with id so id must exist
   todos.splice(index, 1);
   saveTodos();
};


// toggle completed property
const toggleTodo = (id) => {
   const selectedTodo = todos.filter((todo) => todo.id === id)[0];
   selectedTodo.completed = !selectedTodo.completed;
   saveTodos();
};


export { loadTodos, saveTodos, getTodos, createTodo, removeTodo, toggleTodo };
