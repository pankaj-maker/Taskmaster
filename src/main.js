import "./index.css";

import SingleTask from "./components/SingleTask";
import { titleCase,randomId } from "./utils";
import localforage from "localforage";

// === MARK: DOM Selection
const formEl = document.querySelector("[data-form]");
const inputEl = document.querySelector("[data-user-input]");
const taskContainerEl = document.querySelector("[data-task-container]");




// Variables
let state = [];
localforage.setDriver(localforage.LOCALSTORAGE);
localforage.getItem("tasks").then((data)=>{
  state=data || [];
  renderTasks()

})




function toggleCompleted(id){
   state =state.map((task)=>{
        if(id===task.id){
            return{...task,isCompleted: !task.isCompleted}
        }
        return task;
    })
 
 localforage.setItem("tasks",state)
 
    
}
function renderTasks() {
  taskContainerEl.innerHTML = "";

  const frag = document.createDocumentFragment();
  state.forEach((task) => {
    frag.appendChild(SingleTask(task.text, task.isCompleted,task.id));
  });
  taskContainerEl.appendChild(frag);
}

formEl.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent refresh
  if (!inputEl.value) return; // Gaurd Clause
  if(inputEl.value===":clearall")return clearTask()
  //  Creating new task
  const newTask = {
    text: titleCase(inputEl.value),
    isCompleted:false,
    id: randomId(),
  };

  //  Adding
  state.unshift(newTask);
  localforage.setItem("tasks",state)

  renderTasks();

  console.log(state);

  //  Clearing input value
  inputEl.value = "";
});

// Render the current year
const showYearEl = document.querySelector(".show-year");
showYearEl.textContent = new Date().getFullYear();


taskContainerEl.addEventListener("click",(e)=>{
    if(e.target.tagName==="INPUT"){
        toggleCompleted(e.target.id);
        state.sort((a,b)=> a.isCompleted - b.isCompleted)
        localforage.setItem("tasks",state)
        renderTasks();
        }
})
function clearTask(){
  state.length=0;
  localforage.setItem("tasks",state)
  renderTasks();
  inputEl.value=""
}
