import React from "react";

const TodoList = ({ todos, removeHandler }) => (
  <div>
    {todos.map((t, i) => (
      <div key={i}>
        <span>{t.title}</span>
        <span data-testid={t.id} onClick={() => removeHandler(t.id)}>X</span>
      </div>
    ))}
  </div>
);

export default TodoList;
