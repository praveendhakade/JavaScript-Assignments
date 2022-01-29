const todo_field = document.querySelector("input");
const btn = document.querySelector("button");
const todos = document.querySelector(".todos");
const dropdown = document.getElementById("dropdown");
// console.log(dropdown.value)

let key_count = 0;
let myTodos = [];
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    dropdown.addEventListener("change", () => {
      if(dropdown.value === 'completed'){
        myTodos = data.filter((item) => item.completed);
        render(myTodos);
      }
      else if (dropdown.value === 'pending'){
        myTodos = data.filter((item) => !item.completed);
        render(myTodos);
      }
    });

    myTodos = data.filter((item) => item.completed).slice(0,10);
    render(myTodos);


  });

// to render the tasks on the screen
function render(myTodos) {
  todos.innerHTML = '';
  myTodos.forEach((todo, idx) => {
    const newTodo = document.createElement("p");
    newTodo.setAttribute("key", idx);
    newTodo.innerHTML = todo.title;
    todos.appendChild(newTodo);
  });
}