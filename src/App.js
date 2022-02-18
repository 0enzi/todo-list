import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>
      <Form></Form>
      <TodoList></TodoList>
    </>
  );
}

export default App;
