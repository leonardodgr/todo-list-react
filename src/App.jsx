import './App.css'
import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Estudar Next.js",
      category: "Estudos",
      isCompleted: false
    },
    {
      id: 2,
      text: "Fazer compras no mercado",
      category: "Pessoal",
      isCompleted: true
    },
    {
      id: 3,
      text: "Atualizar portfólio no GitHub",
      category: "Trabalho",
      isCompleted: false
    }
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 1000),
      text,
      category,
      isCompleted: false,
    },
    ]
    setTodos(newTodos)
  }


  return (

    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))
        }
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>

  )

}



export default App
