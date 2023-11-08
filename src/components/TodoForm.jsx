import React, { useState } from "react";

const TodoForm = ({ onCreate }) => {
  const [todo, setTodo] = useState({ title: "" });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTodo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitTodo = (e) => {
    e.preventDefault();

    if (todo.title == "") {
      alert("Please type a todo!!");
    } else {
      onCreate(todo);
      setTodo({ title: "" });
    }
  };

  return (
    <form onSubmit={submitTodo} className="todo-form">
      <div>
        <label>Todo: </label>
        <input
          type="text"
          onChange={handleChange}
          value={todo.title}
          name="title"
          placeholder="Enter a todo"
        />
      </div>
      <abbr title="Add new todo">
        <button type="submit">Submit</button>
      </abbr>
    </form>
  );
};

export default TodoForm;
