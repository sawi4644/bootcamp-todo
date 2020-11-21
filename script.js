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
    // add data index attribute
    li.setAttribute('data-index', i )
    // create button
    var button = document.createElement("button")
    button.innerText = "complete"
    li.appendChild(button)
    // append list item into to do ul
    todoList.appendChild(li)
  }
    

}

function addTodo(event){
    event.preventDefault()
    // get todoInput value
    var newTodo = todoInput.value

    if(newTodo !== ''){
        todos.push(newTodo)
        todoInput.value = null
        renderTodos()
    }

}

function removeTodo(event){
    if(event.target.matches('button'))
    // find index from li
    var index = parseInt(target.parentNode.getAttribute('data-index'))
    // remove the todo from the todos array
    todos.splice(index ,1)
    // rerender list
    renderTodos()
}

todoForm.addEventListener('submit', addTodo)
todoList.addEventListener('click', removeTodo )
// calling function so itll run
renderTodos()