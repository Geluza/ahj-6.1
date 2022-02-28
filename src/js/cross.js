// TODO: write your code here
//появление крестика при наведении на задачу
const vidget = Array.from(document.getElementsByClassName("vidget"));
export default function addCross() {
for(let i = 0; i < vidget.length; i += 1) {
vidget[i].addEventListener("mouseover", (e) => {
  e.preventDefault();
  if(e.target.classList.contains("task")) {
    e.target.querySelector(".cross").style.display = "block";
  }
});
vidget[i].addEventListener("mouseleave", (e) => {
    e.preventDefault();
    if(e.target.classList.contains("task")) {
      e.target.querySelector(".cross").style.display = "none";
    }
  });
}
}

//удаление задачи при нажатии на крестик
export function removeTask() {
  for(let i = 0; i < vidget.length; i += 1) {
  vidget[i].addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target.classList.contains("cross")) {
    const colName = Array.from(document.querySelectorAll(".column_title"))[i];
    const arrayEdit = JSON.parse(localStorage.getItem(colName.textContent));
    const textTask = e.target.previousSibling.textContent;
    const numForDelete = arrayEdit.indexOf(textTask);
    arrayEdit.splice(numForDelete, 1);
    localStorage.setItem(colName.textContent, arrayEdit);
    }
  });
}}