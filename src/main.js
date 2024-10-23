import "./index.css"
// console.log('hi');

const index=[1,2,3,4,5]
function getRandom(arry){
    const list=[...arry]
    return ()=>{
        const rn=Math.floor(Math.random()*list.length);
        const removed=list.splice(rn,1)[0]
        return removed
    }
    
}
console.log(getRandom());

