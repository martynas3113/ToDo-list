import { Todo } from './components/Todo.js';
import { EditForm } from './components/EditForm.js';

const addNewTask = document.querySelector('.add-new');
const lightbox = document.querySelector('.lightbox');
const formAdd = lightbox.querySelector('form.add');
const textarea = formAdd.querySelector('textarea');
const buttonCancel = formAdd.querySelector('button.cancel');
const buttonAdd = formAdd.querySelector('button.add');

// init objects
const todo = new Todo({
    selector: 'main'
});
todo.init();

const editForm = new EditForm({
    selector: 'form.update',
    todoObject: todo
});
editForm.init();

todo.editForm = editForm;

// add events
addNewTask.addEventListener('click', () => {
    lightbox.dataset.form = 'add';
    lightbox.classList.add('show');
})

addEventListener('keyup', ({ key }) => {
    if (key === 'Escape') {
        lightbox.classList.remove('show');
    }
})

buttonCancel.addEventListener('click', e => {
    e.preventDefault();
    lightbox.classList.remove('show');
})

buttonAdd.addEventListener('click', e => {
    e.preventDefault();
    todo.addTask(textarea.value);
    textarea.value = '';
    lightbox.classList.remove('show');
})