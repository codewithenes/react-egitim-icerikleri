import React from "react";
import { useState } from "react";

function TodoCreate({ onCreateTodo }) {

  const [newTodo, setNewTodo] = useState("");

  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 9999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput()
  };

  const clearInput = ()=>{
    setNewTodo("")
  }

  return (
    <div className="todo-create">
      <h3 style={{ color: "whitesmoke" }}>TODO LIST</h3>
      <input
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
        className="todo-input"
        type="text"
        placeholder="Add Todo"
      />
      <button onClick={createTodo}>Add ToDo!</button>
    </div>
  );
}

export default TodoCreate;
