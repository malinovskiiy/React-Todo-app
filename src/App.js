import React, { useEffect, useState, lazy, Suspense } from "react";
import TodoList from "./components/TodoList";
import Context from "./context";
import Spinner from "./components/Spinner";
import Modal from "./Modal/Modal";

const AddTodo = lazy(() => import("./components/AddTodo"));

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((todos) => {
        setTimeout(() => {
          setTodos(todos);
          setLoading(false);
        }, 1000);
      });
  }, []);

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    );
  }

  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="container pt-5">
        <h1 className="mb-5">React todo app</h1>

        <Modal></Modal>

        <Suspense fallback={<p>loading...</p>}>
          <AddTodo onCreate={addTodo}></AddTodo>
        </Suspense>

        {loading && <Spinner />}

        {todos.length ? (
          <TodoList todos={todos} onToggle={toggleTodo} />
        ) : loading ? null : (
          <p>No todos</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
