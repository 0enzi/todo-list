import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([
    { text: "Example Task", completed: false, id: 41.7312544432943 },
  ]);
  return (
    <>
      <header>
        <h1>TODO LIST {inputText}</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
      ></Form>
      <TodoList setTodos={setTodos} todos={todos}></TodoList>
    </>
  );
}

export default App;
