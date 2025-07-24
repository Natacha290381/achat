import React, { useState } from 'react';
import Task from './Task';

const columns = ['À faire', 'En cours', 'Terminé'];

export default function Kanban() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Demande de devis', progress: 0, column: 'À faire' },
    { id: 2, title: 'Validation fournisseur', progress: 40, column: 'En cours' },
    { id: 3, title: 'Commande envoyée', progress: 100, column: 'Terminé' },
  ]);

  const moveTask = (id, direction) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        const currentIndex = columns.indexOf(t.column);
        const newIndex = currentIndex + direction;
        if (newIndex >= 0 && newIndex < columns.length) {
          return { ...t, column: columns[newIndex] };
        }
      }
      return t;
    });
    setTasks(updated);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 20 }}>
      {columns.map((col) => (
        <div key={col} style={{ width: '30%', padding: 10, background: '#f0f0f0', borderRadius: 10 }}>
          <h2>{col}</h2>
          {tasks.filter((t) => t.column === col).map((task) => (
            <Task key={task.id} task={task} moveTask={moveTask} />
          ))}
        </div>
      ))}
    </div>
  );
}
