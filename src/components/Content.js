import React from "react";
import ContentFooter from "./ContentFooter";
import TodoList from "./TodoList";

const Content = ({
  todos,
  toggleAll,
  checked,
  clearCompleted,
  changeActiveFilter,
  deleteTodo,
  toggle,
  activeFilter,
}) => {
  return (
    <>
      <section className="main">
        <input
          className="toggle-all"
          type="checkbox"
          checked={checked}
          onChange={toggleAll}
        />
        <label
          htmlFor="toggle-all"
          onClick={toggleAll}
          style={{ display: todos.length ? "block" : "none" }}
        >
          Mark all as complete
        </label>

        <TodoList
          deleteTodo={deleteTodo}
          toggle={toggle}
          activeFilter={activeFilter}
          todos={todos}
        />
      </section>
      <ContentFooter
        todos={todos}
        clearCompleted={clearCompleted}
        changeActiveFilter={changeActiveFilter}
        activeFilter={activeFilter}
      />
    </>
  );
};

export default Content;
