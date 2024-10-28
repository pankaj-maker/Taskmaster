import "./index.css"
import { titleCase } from "./utils";
const formEl=document.querySelector("[data-form]");
const inputEl=document.querySelector("[data-user-input]")
const task=[];

formEl.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(!inputEl.value) return;
    const newTask=task.push({
        text: titleCase(inputEl.value),
        isCompleted:false,
        id:task.length,
})
    task.unshift(newTask)
    console.log(task)
    inputEl.value="";
    
})



const showYearEl=document.querySelector(".show-year")
showYearEl.textContent=new Date().getFullYear();
