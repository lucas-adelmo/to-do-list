import { useState } from 'react'
import './App.css'
import AddCard from './components/AddCard'
import ListItem from './components/ListItem'

function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div className='App'>
      <h1>Lista de tarefas</h1>
      <AddCard addTask={addTask} />
      <ul>
        {tasks.map((task, index)=>(
          <ListItem 
            key={index} 
            task={task}
            removeTask={() => removeTask(index)} />
        ))}
      </ul>
      
      
    </div>
  )
}

export default App
