import "./App.css";
import { useState } from "react";

import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from "./components/Search";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar Next.js",
      category: "Estudos",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Fazer compras no mercado",
      category: "Pessoal",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Atualizar portfólio no GitHub",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) =>
      todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo
    );
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <div className="todo-list">
        {todos
          .filter((todo) =>
            todo.text.toLowerCase().includes(search.toLowerCase())
          )

          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

// Estou deixando um comentário aqui

export default App;