import React from 'react';
import styles from './TodoItem.module.css'

const TodoItem = ({ todo, removeHandler }) => {
    return (
        <div className={styles.itemContainer}>
            <input type='checkbox' data-testid={`checkbox-${todo.id}`} />
            <span>{todo.title}</span>
            <span data-testid={`close-btn-${todo.id}`} onClick={() => removeHandler(todo.id)}>X</span>
        </div>
    );
}

export default TodoItem;