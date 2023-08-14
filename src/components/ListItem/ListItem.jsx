import { useState } from 'react';
import './ListItem.css'

export const ListItem = ({task}) => {
    const [finished, setFinished] = useState(false)

    const handleCheckTask = () => {
      setFinished(!finished);
    };
  
    return (
      <div className={`list-item ${finished ? 'finished' : ''}`}>
        <p>{task}</p>
        <button onClick={handleCheckTask}>
          {finished ? 'Desfazer' : 'Finalizar'}
        </button>
      </div>
    );
}