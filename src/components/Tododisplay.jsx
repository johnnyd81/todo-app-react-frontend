import React from "react";
import Todoitem from "./Todoitem";

const Tododisplay = ({ todos, onDelete }) => {
  let content;
  if (todos.length == 0) {
    content = (
      <div>
        <h2 className="msg">No todos to display</h2>
      </div>
    );
  }
  if (todos.length > 0) {
    content = todos.map((todo) => {
      return <Todoitem key={todo._id} todo={todo} onDelete={onDelete} />;
    });
  }

  return <div className="todo-box">{content}</div>;
};

export default Tododisplay;
