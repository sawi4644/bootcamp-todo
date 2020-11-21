var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
function renderTodos(){
    // clear exisiting to dos
    todoList.innerHTML = ''
    // re render todos
    for(var i = 0; i< todos.length; i ++){
    // create li element
    var li= document.createElement('li')
    // add todo text to li
    todos[i]
    // add text to li
    li.innerText = todos [i]
    // append list item into to do ul
    todoList.appendChild(li)
    
    }
}
function addTodo(event){
    event.preventDefault()
    // get todoInput value
    var newTodo = todoInput.value

    if(newTodo === ''){
        return;
    }
    // push value into array of todos
    todos.push(newTodo)
    todoInput.value = null
    renderTodos()

}

todoForm.addEventListener('submit', addTodo)
// calling function so itll run
renderTodos()