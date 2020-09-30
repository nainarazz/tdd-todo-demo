import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ todos, removeHandler, updateTodo }) => (
  <>
    {todos.map((t) => <TodoItem key={t.id} todo={t} removeHandler={removeHandler} updateTodo={updateTodo} />)}
  </>
);

export default TodoList;
