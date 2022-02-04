import React from "react";

const TodoList = ({ deleteTodo, toggle, activeFilter, todos }) => {
  let filtered = todos;

  if (activeFilter !== "all") {
    filtered = todos.filter((todo) =>
      activeFilter === "completed" ? todo.completed : !todo.completed
    );
  }
  return (
    <ul className="todo-list">
      {filtered.map((todo, i) => (
        <li key={i} className={todo.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              checked={todo.completed}
              type="checkbox"
              onChange={() => toggle(todo.id)}
            />
            <label>{todo.text}</label>
            <button
              className="destroy"
              onClick={() => deleteTodo(todo.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
