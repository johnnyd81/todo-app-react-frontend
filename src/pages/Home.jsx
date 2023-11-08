import React, { useState, useEffect } from "react";
import Tododisplay from "../components/Tododisplay";
import TodoForm from "../components/TodoForm";
import { useAuthcontext } from "../hooks/useAuthcontext";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const { user } = useAuthcontext();

  useEffect(() => {
    const getTodos = async () => {
      const response = await fetch("http://localhost:4000/api/todos", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setTodos(json);
      }
    };
    if (user) {
      getTodos();
    }
  }, [user]);

  const createTodo = async (newTodo) => {
    if (!user) {
      return;
    }
    const response = await fetch("http://localhost:4000/api/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      console.log(json);
      setTodos((prev) => [...prev, json]);
    } else {
      console.log(json.error);
    }
  };

  const removeTodo = async (id) => {
    if (!user) {
      return;
    }

    const response = await fetch("http://localhost:4000/api/todos/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      console.log("Todo has been deleted!!");
    }

    const newTodos = todos.filter((todo) => todo._id != json._id);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoForm onCreate={createTodo} />
      <Tododisplay todos={todos} onDelete={removeTodo} />
    </div>
  );
};

export default Home;
