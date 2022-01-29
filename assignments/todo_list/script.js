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


    // myTodos = data.slice(0,10);
    // myTodos = data.filter((item) => item.completed);

    // console.log(myTodos);
    // myTodos.forEach((todo, idx) => {
    //   const newTodo = document.createElement("p");
    //   newTodo.setAttribute("key", idx);
    //   newTodo.innerHTML = `${todo.title}, status: ${todo.completed}`;
    //   todos.appendChild(newTodo);
    // });
// render(myToDo);

// console.log(completedTodo);
// console.log(pendingTodo);
// console.log(dropdown);

// const completedTodo = document.getElementById("completed");
// completedTodo.addEventListener("click", () =>
//   console.log("clicked on completed")
// );

// dropdown.addEventListener("change", () => {
//   console.log("clicked");
// });
// const options = document.querySelectorAll(options);
// console.log(completedTodo);
// const pendingTodo = document.getElementById("pending");

// console.log(myToDo)
// btn.addEventListener("click", () => {
//   const data = todo_field.value;
//   if (data) {
//     const para = document.createElement("p");

//     //   adding key attribute to paras

//     const att = document.createAttribute("key");
//     att.value = `${key_count}`;
//     para.setAttributeNode(att);
//     para.innerHTML = `${data}`;
//     key_count = key_count + 1;
//     todos.appendChild(para);
//     todo_field.value = "";

//     para.addEventListener("click", () => {
//       para.remove();
//     });
//   }
// });
