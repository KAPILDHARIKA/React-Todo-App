import React from 'react';

const Form = ({ setText, setTodos, todos, text, setStatus }) => {

 const inputTextHandler = (e) => {
   setText(e.target.value);
 }; 

 const submitTodoHandler = (e) => {
   e.preventDefault();
   setTodos([
      ...todos, {text: text, completed: false, id:Math.random()* 1000}
    ]);
   setText(" ");
};

 const statusHandler = (e) => {
   setStatus(e.target.value)     
}
 
 return (
    <form>
      <input  onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );

}

export default Form;