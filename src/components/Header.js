import Form from "./Form";

const Header = ({ addTodo }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <Form addTodo={addTodo} />
    </header>
  );
};

export default Header;
