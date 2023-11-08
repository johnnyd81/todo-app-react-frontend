import React from "react";

const Todoitem = ({ todo, onDelete }) => {
  return (
    <div className="todo-item">
      <p>{todo.title && todo.title[0].toUpperCase() + todo.title.slice(1)}</p>
      <abbr title="Delete todo">
        <i className="bx bxs-x-circle" onClick={() => onDelete(todo._id)}></i>
      </abbr>
    </div>
  );
};

export default Todoitem;
