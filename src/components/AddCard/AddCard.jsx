import { useState } from "react"
import "./AddCard.css"

export const AddCard = ({addTask}) => {

    const [newTask, setNewTask ] = useState('')

    const handleAddTask = () => {
        if (newTask.trim() !== ''){
            addTask(newTask);
            setNewTask('')
        }
    }

    return(
        <div className="card">
            <input
                type="text"
                placeholder="Digite a tarefa aqui"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleAddTask}>Adicionar Tarefa</button>
        </div>
    )

}