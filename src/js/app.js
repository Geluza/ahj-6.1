// TODO: write your code here
import addWrite from './addTask';
import addCross from './cross';
import openModal from './Modal';
import closeModal from './Modal';
import removeTask from './cross';

openModal();
closeModal();
addWrite();
addCross();
removeTask();

function printTask(columnName, idVidget) {
  const getStorage = JSON.parse(localStorage.getItem(columnName));
  if(getStorage) {
  getStorage.forEach((elem) =>{
  const taskForPrint = document.createElement("div");
  taskForPrint.className = "task";
  taskForPrint.innerHTML += `<span class="text">${elem}</span><button type="button" class="cross">&#10007</button>`;
  document.getElementById(idVidget).appendChild(taskForPrint);
})
}}

document.addEventListener('DOMContentLoaded', 
printTask("TODO", "vidget-todo"),
printTask("IN PROGRESS", "vidget-in-progress"),
printTask("DONE", "vidget-done")

)




 //document.addEventListener("DOMContenetLoaded", ()=> {
 //const lists = Array.from(document.querySelectorAll(".list"));
 //const colName = Array.from(document.querySelectorAll(".column_title"));
 //for (let i = 0; i < lists.length; i += 1) {
  // const getTasks = JSON.parse(localStorage.getItem(colName[i].textContent));
   // getTasks.forEach((task) =>{
    // const taskForPrint = document.createElement("li");
    // taskForPrint.className = "task";
    // taskForPrint.innerHTML += `<span class="text">${task}</span><button type="button" class="cross">&#10007</button>`;
     //lists[i].appendChild(taskForPrint);
    //});
 //}})

