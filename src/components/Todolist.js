import React, { useState } from "react";
import Todo from "./Todo";
import Newtodoform from "./Newtodoform";

const Todolist = () => {
  const [todos, setTodos] = useState([]);

  const create = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const remove = (id) => {
    setTodos(todos.filter((e) => e.id !== id));
  };

  const update = (id, updatedTask) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const toggleCompletion = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const todoComponents = todos.map((todo) => (
    <Todo
      key={todo.id}
      id={todo.id}
      completed={todo.completed}
      task={todo.task}
      removeTodo={remove}
      updateTodo={update}
      toggleTodo={toggleCompletion}
    />
  ));

  return (
    <div>
      <h1>Todolist!</h1>
      <Newtodoform createTodo={create} />
      <ul>{todoComponents}</ul>
    </div>
  );
};

export default Todolist;
