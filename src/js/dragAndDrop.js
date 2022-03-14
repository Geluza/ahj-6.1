// TODO: write your code here
// перемещение задач между блоками
export default function dragAndDrop() {
  let draggedEl = null;
  let ghostEl = null;

  const listTasks = Array.from(document.getElementsByClassName('list'));

  listTasks.forEach((list) => {
    list.addEventListener('mousedown', (evt) => {
      evt.preventDefault();
      if (!evt.target.classList.contains('task')) {
        return;
      }
      document.body.style.cursor = 'grabbing';
      draggedEl = evt.target;
      ghostEl = evt.target.cloneNode(true);
      ghostEl.classlist.add('dragged');
      document.body.appendChild(ghostEl);
      ghostEl.style.left = `${evt.pageX - ghostEl.offsetWidth / 2}px}`;
      ghostEl.style.top = `${evt.pageY - ghostEl.offsetHeight / 2}px}`;
    });
  });
}
