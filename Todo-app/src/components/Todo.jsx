import React, { useState } from "react";
import { IoMdRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

import "../css/todo.css";

function Todo({todo , removeTodo, onUpdateTodo}) {

  const {id, content} = todo;
  const [editable , setEditable] = useState(false);
    const [newContent , setNewContent] = useState(content);

  const onRemoveTodo = () =>{
    removeTodo(id);
  }
  const updateTodo = () =>{
    const request = {
      id : id,
      content : newContent 
    }
    onUpdateTodo(request);
    setEditable(false)
  }

  
  return (
    <div
      style={{
        flexDirection: "row",
        display: "flex",
        justifyContent: "space-between",
        textAlign: "center",
        alignItems:"center",
        padding:"7px",
        border: "1px solid white",
        marginBottom: "4px"
      }}
    >
      <div>
        {
          editable ? <input type="text" value={newContent}  onChange={(e)=> setNewContent(e.target.value)} className="todo-input"/> : todo.content
        }
      </div>
      
      <div>
         <IoMdRemoveCircle className="todo-icons" onClick = {onRemoveTodo}/>

        {
          editable ?<FaCheck className="todo-icons" onClick = {updateTodo}/> 
          :  <FaEdit className="todo-icons" onClick={() => setEditable(true)}/>

        }
      </div>
    </div>
  );
}

export default Todo;
