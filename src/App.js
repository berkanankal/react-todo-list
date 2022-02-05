import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [todos, setTodos] = useState([
    { id: uuidv4(), text: "Learn Javascript", completed: false },
    { id: uuidv4(), text: "Learn React", completed: true },
    { id: uuidv4(), text: "Have a life!", completed: false },
  ]);
  const [activeFilter, setActiveFilter] = useState("all");

  const deleteTodo = (id) => {
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter((t) => t.id !== id));
    }
  };

  const addTodo = (text) => {
    setTodos([...todos, { id: uuidv4(), text, completed: false }]);
  };

  const clearCompleted = () => {
    if (window.confirm("Are you sure?")) {
      setTodos(todos.filter((t) => t.completed !== true));
    }
  };

  const toggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const changeActiveFilter = (filter) => {
    setActiveFilter(filter);
  };

  const toggleAll = () => {
    setTodos(
      todos.map((todo) => ({
        ...todo,
        completed: !todos.every((t) => t.completed),
      }))
    );
  };

  return (
    <>
      <section className="todoapp">
        <Header addTodo={addTodo} />
        <Content
          todos={todos}
          deleteTodo={deleteTodo}
          toggle={toggle}
          activeFilter={activeFilter}
          toggleAll={toggleAll}
          checked={todos.every((t) => t.completed)}
          changeActiveFilter={changeActiveFilter}
          clearCompleted={clearCompleted}
        />
      </section>
      <Footer />
    </>
  );
};

export default App;
