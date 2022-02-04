import React from "react";

const ContentFooter = ({
  todos,
  clearCompleted,
  changeActiveFilter,
  activeFilter,
}) => {
  const todosLeft = todos.filter((todo) => todo.completed === false).length;

  return (
    <footer
      className="footer"
      style={{ display: todos.length ? "block" : "none" }}
    >
      <span className="todo-count">
        <strong>{todosLeft}</strong> item{todosLeft > 1 ? "s" : ""} left
      </span>

      <ul className="filters">
        <li>
          <button
            onClick={() => changeActiveFilter("all")}
            className={activeFilter === "all" ? "selected" : ""}
          >
            All
          </button>
        </li>
        <li>
          <button
            onClick={() => changeActiveFilter("active")}
            className={activeFilter === "active" ? "selected" : ""}
          >
            Active
          </button>
        </li>
        <li>
          <button
            onClick={() => changeActiveFilter("completed")}
            className={activeFilter === "completed" ? "selected" : ""}
          >
            Completed
          </button>
        </li>
      </ul>

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default ContentFooter;
