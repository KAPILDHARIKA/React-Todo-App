import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

 const [text, setText] = useState("");
 const [todos, setTodos] = useState([]);
 const [status, setStatus] = useState("all");
 const [filteredTodos, setFilterTodos] = useState([]);

  useEffect(()=>{
  filterHandler();
  saveLocalTodos();
 },[todos, status]);

   useEffect(()=>{
   getLocalTodos();
 }, [])

 const filterHandler = () => {
    switch(status){
      case 'completed': setFilterTodos(todos.filter(todo => todo.completed === true));
                         break;
      case 'uncompleted': setFilterTodos(todos.filter(todo => todo.complted === false));
                          break;
      default: setFilterTodos(todos);
              break;
   } 
 };

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  };
   
   const getLocalTodos = () => {
    if(localStorage.getItem('todos')===null){
        localStorage.setItem('todos', JSON.stringify([]));
    }else{
       let todoLocal = JSON.parse(localStorage.getItem('todos'));
        setTodos(todoLocal);
     }
    }

  return (
    <div className="App">
     <header>
       <h1>Dharika's Todo List</h1>
     </header>
       <Form setStatus={setStatus} text={text} todos={todos} setTodos={setTodos} setText={setText} ></Form>
       <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
}

export default App;
