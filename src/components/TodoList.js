import React from "react";
import Todo from "./Todo.js";

const TodoList = ({ setTodos, todos }) => {
  todos.map((todo) => console.log(todo));
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            id={todo.id}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
