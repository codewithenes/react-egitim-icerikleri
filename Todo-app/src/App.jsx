import { useState } from "react";
import "./css/todo.css";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  const createTodo = (newtodo) => {
    setTodos([...todos, newtodo]);
  };
  const removeTodo = (todoId) =>{
    setTodos([...todos.filter((todo) => todo.id !== todoId)])
  }
  const updateTodo = (newTodo) =>{
   const updatedTodos = todos.map((todo) =>{
      if (todo.id !== newTodo.id){
      return todo;
      }
      return newTodo;
    })
    setTodos([...updatedTodos]);
  }
    
      

  console.log(todos);
  return (
    <div className="App">
      <div
        style={{
          width: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px",
        }}
      >
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList todos={todos} removeTodo = {removeTodo} onUpdateTodo = {updateTodo} />
      </div>
    </div>
  );
}

export default App;
