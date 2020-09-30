import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, removeHandler, updateTodo }) => {
    return (
        <div className={styles.itemContainer}>
            <input type='checkbox' checked={todo.completed} data-testid={`checkbox-${todo.id}`} onChange={() => updateTodo(todo.id)} />
            <span className={todo.completed ? styles.completed : ''} data-testid={`item-${todo.id}`}>
                {todo.title}
            </span>
            <span data-testid={`close-btn-${todo.id}`} onClick={() => removeHandler(todo.id)}>X</span>
        </div>
    );
}

export default TodoItem;