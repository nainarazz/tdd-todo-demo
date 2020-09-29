import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  function addTodo() {
    const value = {
      userId: 3,
      id: Math.floor(Math.random() * 100) + 1 ,
      title: newTodo,
      completed: false
    };

    setSaving(true);
    fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify(value),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setSaving(false);
        setTodos(todos.concat(result));
      })
  }

  function onChange(e) {
    const value = e.target.value;
    setNewTodo(value);
  }

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const result = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      ).then((response) => response.json());
      setLoading(false);
      setTodos(result.slice(0, 5));
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>My todo list</h1>
      {loading ? "Loading" : <TodoList todos={todos} />}
      <div>
      {saving ? "Saving" : (
        <>
          <input type="text" onChange={onChange} />
          <button onClick={addTodo}>Add new todo</button>
        </>
      )}
        
      </div>
    </div>
  );
}

export default App;
