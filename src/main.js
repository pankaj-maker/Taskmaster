import "./index.css"
import { titleCase } from "./utils";
import SingleTask from "./components/SingleTask";
const formEl=document.querySelector("[data-form]");
const inputEl=document.querySelector("[data-user-input]")
const taskContainerEl=document.querySelector("[data-task-container]")
const task=[];
function renderTask(){
    taskContainerEl.innerText="";
    const frag=document.createDocumentFragment();
    task.forEach((task)=>{
        frag.appendChild(SingleTask(task.text,task.isCompleted))
    })
    taskContainerEl.appendChild(frag)
}

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!inputEl.value) return;
    const newTask=task.push({
        text: titleCase(inputEl.value),
        isCompleted:false,
        id:task.length,
})
    task.unshift(newTask)
    renderTask();
    console.log(task)
    inputEl.value="";
    
})



const showYearEl=document.querySelector(".show-year")
showYearEl.textContent=new Date().getFullYear();
