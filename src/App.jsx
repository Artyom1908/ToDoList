import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './index.css'
import ToDoInput from './ToDoInput'
import ToDosList from './ToDosList'

function App() {
  const [todos, setToDos] = useState([])
  return (
    <div className="App">
      <h1>ToDo List App</h1>
      <ToDoInput Add={(value) => {
        setToDos(
          [
            ...todos,
            {
              id: Math.random(),
              title: value,
              IsCompleted: false
            }
          ]
        )
      }} />
      <ToDosList todos={todos} ClearCompleted={() => {
        setToDos(todos.filter((todo) => !todo.IsCompleted))
      }} Change={(newToDo) => {
        setToDos(todos.map((todo) => {
          if (todo.id === newToDo.id) {
            return newToDo
          }
          return todo
        }))
      }} />
    </div>
  )
}

export default App
