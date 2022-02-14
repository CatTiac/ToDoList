import React from 'react';

import Header from "./AppHeader";

import './App.css';

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      {todo.text}
      <div>
        <button className = "buttons" onClick={() => completeTodo(index)}>Complete</button>
        <button className = "buttons" onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
};

//Adds list item on press 'Enter'
function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };
  return (
    <form data-testid="form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        placeholder='Add an item'
        value={value}
        onChange={event => setValue(event.target.value)} />
    </form>
  );
}

function App() {
  //toDos names the state, setToDos sets the state
  const [toDos, setToDos] = React.useState([
    {
      text: "Make a cuppa",
      isCompleted: false
    },
    {
      text: "Have a rest",
      isCompleted: false
    },
    {
      text: "Tidy up",
      isCompleted: false
    }
  ]);

  const addToDo = text => {
    const newTodos = [...toDos, { text }];
    setToDos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...toDos];
    newTodos[index].isCompleted = true;
    setToDos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...toDos];
    newTodos.splice(index, 1);
    setToDos(newTodos);
  };

  return (
    <div className="app">
      <div className='header'>
        <Header />
        <h2>Add, Remove or mark an item as complete</h2>
      </div>
      <div className='inputBox'>
        <TodoForm addTodo={addToDo} />
      </div>
      <div className="list">
        {toDos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />
        ))}
      </div>
    </div>
  );
}

export default App;