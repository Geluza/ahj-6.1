// TODO: write your code here
//открываем окно с добавлением задачи
//добавляем задачу в нужное окно и сохраняем в localStorage

export default function addWrite() {
const addTask = Array.from(document.getElementsByClassName("add_task"));
const lists = document.querySelectorAll(".list");
const textTask = Array.from(document.getElementsByClassName("text_task"));
const modal = document.querySelectorAll(".window_modal");

for(let i =0; i < addTask.length; i += 1) {
addTask[i].addEventListener("click", (e)=> {
e.preventDefault;
const li = document.createElement("li");
li.className = "task";
li.innerHTML += `<span class="text">${textTask[i].value}</span><button type="button" class="cross">&#10007</button>`;
lists[i].appendChild(li);
modal[i].style.display="none";
const colName = document.querySelectorAll(".column_title")[i];
if(localStorage.getItem(colName.textContent)) {
  const getArr = JSON.parse(localStorage.getItem(colName.textContent));
  getArr.push(textTask[i].value);
  localStorage.setItem(colName.textContent, JSON.stringify(getArr));
} else {
const arrTasks = [];
const tasks = textTask[i].value;
arrTasks.push(tasks);
localStorage.setItem(colName.textContent, JSON.stringify(arrTasks));
}
})
}
}












