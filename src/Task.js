import React from 'react';

export default function Task({ task, moveTask }) {
  const getColor = (progress) => {
    if (progress < 30) return '#ff4d4d';
    if (progress < 70) return '#ffa500';
    return '#4caf50';
  };

  return (
    <div style={{
      background: '#fff',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <strong>{task.title}</strong>
      <div style={{
        height: 10,
        background: '#ddd',
        borderRadius: 5,
        marginTop: 5,
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${task.progress}%`,
          background: getColor(task.progress),
          height: '100%'
        }} />
      </div>
      <div style={{ marginTop: 5 }}>
        <button onClick={() => moveTask(task.id, -1)}>←</button>
        <button onClick={() => moveTask(task.id, 1)} style={{ marginLeft: 5 }}>→</button>
      </div>
    </div>
  );
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
