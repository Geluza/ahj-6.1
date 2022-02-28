// TODO: write your code here
//открываем окно с добавлением задачи
const btnAdd = Array.from(document.querySelectorAll(".add"));
const modal = document.querySelectorAll(".window_modal");
export default function openModal() {
for(let i = 0; i < btnAdd.length; i += 1) {
    btnAdd[i].addEventListener("click", (e)=> {
      e.preventDefault();
      modal[i].style.display = "block";
    });  
}}


//закрываем окно задачи без сохранения
const closeBtn = Array.from(document.querySelectorAll(".close_task"));
export function closeModal() {
for(let i = 0; i < closeBtn.length; i += 1) {
closeBtn[i].addEventListener("click", ()=> {
   modal[i].style.display="none";
})
}}




