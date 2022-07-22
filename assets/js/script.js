//reference too add class in the form
const addForm = document.querySelector('.add');
// reference to ul
const list = document.querySelector('.todos');
//reference to search input
const search = document.querySelector('.search input');

//add todos
//func to inject tempalte string ---- add todo ----
const generateTemplate = todo => {
    const html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    //adding to html list
    list.innerHTML += html;
};

addForm.addEventListener('submit', e => {
    //prevent from page refresh
    e.preventDefault();
    //reading input and trim to string only with no space
    const todo = addForm.add.value.trim();
    //check for input if it is any
    if(todo.length) {
        // invoking func
        generateTemplate(todo);
        //clearing input after add todo
        addForm.reset();
    }
});

//remove todos
list.addEventListener('click', e => {
    //check if class list contains delte class
    if(e.target.classList.contains('delete')) {
        // if clicked delete icon has class element delete it will remove parent li.
        e.target.parentElement.remove();
    }
})




//search/filter todos

//2.

const filterTodos = (term) => {
    //if searching input dont match todo from ul will hide it from the html
    Array.from(list.children)
      .filter((todo)=> !todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.add('filtered'));
    
    Array.from(list.children)
      .filter((todo)=> todo.textContent.toLowerCase().includes(term))
      .forEach((todo) => todo.classList.remove('filtered'));

};


//1.
search.addEventListener('keyup', () => {
    //search for inout value
    const term = search.value.trim().toLowerCase();
    filterTodos(term);

})