import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";


function App() {
  const [todos, setTodos] = React.useState([
    {id:1, completed:false, title:'Kupit hleb'},
    {id:2, completed:false, title:'Kupit bred'},
    {id:3, completed:false, title:'Kupit moloko'},
  ])
  //*заполнить из локалсторедж*/
function toggleTodo(id) {
  setTodos(
    todos.map( todo => {
    if (todo.id === id){
      todo.completed = !todo.completed    
    }
    return todo
  }))

}

const removeTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id))
}

function clearAll(){
  setTodos([]);
}

function showeWork(id) {
  setTodos( todos.filter(todo => todo.completed !== true));
  /* к кнопке привязать   */
}/* показать все через локалсторедж , стрелочные сделать,  убрать ченджтуду или проктинуть её.*/

function showeComplited(id) {
  return todos.filter(todo => todo.completed === true);
}

function addTodo(title){ 
    setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed:false,
  }]))

}

  return (
    <React.Fragment>
     <button type='submit' onClick = {clearAll}>remove all</button> 
    <Context.Provider value = {{removeTodo}}>
    <div className='wrapper'>
      <h1>React tutorial</h1>
      <AddTodo onCreate={addTodo}/>
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : <p>no Todo</p>}    
    </div>
    </Context.Provider>
    <Context.Provider value = {{showeWork}}>

    </Context.Provider>
    <Context.Provider value = {{showeComplited}}>

    </Context.Provider>
    </React.Fragment>
  );
}

export default App;
