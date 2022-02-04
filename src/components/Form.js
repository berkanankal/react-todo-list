import { useState } from "react";

const Form = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text.trim());
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        onChange={handleChange}
        value={text}
      />
    </form>
  );
};

export default Form;
