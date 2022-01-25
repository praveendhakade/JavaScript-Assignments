const todo_field = document.querySelector("input");
const btn = document.querySelector("button");
const todos = document.querySelector(".todos");
let key_count = 0;

btn.addEventListener("click", () => {
    
  const data = todo_field.value;
  const para = document.createElement("p");
  
//   adding key attribute to paras

  const att = document.createAttribute("key");
  att.value = `${key_count}`;
  para.setAttributeNode(att)
  para.innerHTML= `${data}`;
  key_count = key_count + 1;
  todos.appendChild(para);
  todo_field.value='';

  para.addEventListener("click", () => {
      para.remove();
  })
});

