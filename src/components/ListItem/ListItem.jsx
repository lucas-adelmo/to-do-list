import { useState } from 'react';
import './ListItem.css'

// eslint-disable-next-line react/prop-types
export const ListItem = ({task, removeTask}) => {
    const [finished, setFinished] = useState(false)

    const handleCheckTask = () => {
      setFinished(!finished);
    };
  
    return (
      <div className={`list-item ${finished ? 'finished' : ''}`}>
        <span>
          <p>{task}</p>
        </span>
        <span>
          <button onClick={handleCheckTask}>
            {finished ? 'Desfazer' : 'Finalizar'}
          </button>
          <button onClick={removeTask}>
            Remover
          </button>
        </span>
      </div>
    );
}