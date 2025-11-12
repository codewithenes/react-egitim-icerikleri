import React from "react";
import Todo from "./Todo";
import "../css/todo.css";

function TodoList({ todos, removeTodo, onUpdateTodo }) {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "40px",
        border: "3px solid white",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      {
        todos && todos.map((todo) =>(
            <Todo todo={todo} key={todo.id} removeTodo= {removeTodo} onUpdateTodo = {onUpdateTodo} />
        ))
        }
    </div>
  );
}

export default TodoList;
