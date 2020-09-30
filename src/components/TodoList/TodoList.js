import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, removeHandler }) => (
  <>
    {todos.map((t) => <TodoItem key={t.id} todo={t} removeHandler={removeHandler} />)}
  </>
);

export default TodoList;
