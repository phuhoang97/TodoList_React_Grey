import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Newtodoform = (props) => {
  const [task, setTask] = useState("");

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createTodo({
      task: task,
      id: uuidv4(),
      completed: false,
    });
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='task'>New todo</label>
      <input
        type='text'
        placeholder='New todo'
        id='task'
        name='task'
        value={task}
        onChange={handleChange}
      />
      <button>Add Todo</button>
    </form>
  );
};

export default Newtodoform;
