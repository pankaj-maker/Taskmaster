export default function(text,isCompleted){

    const label=document.createElement("label");
    label.classList.add("label","cursor-pointer")
    if(isCompleted){
        label.classList.add("bg-slate-300" ,"rounded" ,"p-2")
    }
        label.innerHTML=   `<span class="label-text">${text}</span>
              <input type="checkbox" ${isCompleted && "checked"}class="checkbox checkbox-primary" />`
    
    return label;
}