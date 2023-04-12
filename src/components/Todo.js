import React, { useState } from "react";
import "./Todo.css";

function Todo(props) {
  const [isEditting, setIsEditing] = useState(false);
  const [task, setTask] = useState(props.task);

  const handleRemove = () => {
    props.removeTodo(props.id);
  };

  const toggleForm = () => {
    setIsEditing(!isEditting);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    props.updateTodo(props.id, task);
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleToggle = (e) => {
    props.toggleTodo(props.id);
  };

  let result;
  if (isEditting) {
    result = (
      <div>
        <form onSubmit={handleUpdate}>
          <input type='text' value={task} name='task' onChange={handleChange} />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div>
        <button onClick={toggleForm}>Edit</button>
        <button onClick={handleRemove}>X</button>
        <li
          className={props.completed ? "completed" : ""}
          onClick={handleToggle}
        >
          {props.task}
        </li>
      </div>
    );
  }

  return result;
}

export default Todo;
