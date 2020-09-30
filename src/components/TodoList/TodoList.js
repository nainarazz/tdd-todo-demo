import React from "react";
import styles from './TodoList.module.css'

const TodoList = ({ todos, removeHandler }) => (
  <div>
    {todos.map((t, i) => (
      <div className={styles.itemContainer} key={i}>
        <span>{t.title}</span>
        <span data-testid={t.id} onClick={() => removeHandler(t.id)}>X</span>
      </div>
    ))}
  </div>
);

export default TodoList;
