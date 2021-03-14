import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  const renderedList = filteredTodos.map((todo)=>{return <Todo todos={todos} todo={todo} setTodos={setTodos} key={todo.id} text={todo.text} ></Todo>});
  
  return (
    <div className="todo-container">
      <ul className="todo-list">{renderedList}</ul>      
    </div>
 );
};

export default TodoList;