// TODO: write your code here
//открываем окно с добавлением задачи
const main = document.getElementById("vidgets");
const btnAdd = Array.from(document.querySelectorAll(".add"));
const modal = document.querySelectorAll(".window_modal")
function openModal() {
for(let i = 0; i < btnAdd.length; i += 1) {
    btnAdd[i].addEventListener("click", (e)=> {
      e.preventDefault();
      modal[i].style.display = "block";
    });  
}}


//закрываем окно задачи без сохранения
const closeBtn = Array.from(document.querySelectorAll(".close_task"));
function closeModal() {
for(let i = 0; i < closeBtn.length; i += 1) {
closeBtn[i].addEventListener("click", ()=> {
   modal[i].style.display="none";
})
}}

//добавляем задачу в нужное окно и сохраняем 
const addTask = Array.from(document.getElementsByClassName("add_task"));
const vidgets = document.querySelectorAll(".vidget");
const titleTask = Array.from(document.getElementsByClassName("title_task"));
const textTask = Array.from(document.getElementsByClassName("text_task"));

function addWrite() {
for(let i =0; i < addTask.length; i += 1) {
addTask[i].addEventListener("click", (e)=> {
e.preventDefault;
const div = document.createElement("div");
div.className = "task";
div.innerHTML += `<h4 class="title">${titleTask[i].value}</h4><span class="text">${textTask[i].value}</span><button type="button" class="cross">&#10007</button>`;
vidgets[i].appendChild(div);
modal[i].style.display="none";
})
} 
}





//появление крестика при наведении на задачу
//main.addEventListener("mouseover", (e) => {
 // e.preventDefault();
  //if(e.target.classList.contains("task")) {
  //  e.target.querySelector("cross").display = "block";
  //}
//})



//удаление задачи при нажатии на крестик

  




openModal();
closeModal();
addWrite();


