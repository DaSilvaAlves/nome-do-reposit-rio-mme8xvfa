import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature3: React.FC = () => {
  const [tasks,Tasks] = useState<Task[]>([]);
  const [completed, setCompleted] = useState(false);

  const markAsCompleted = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Marcar como Conclda</h2>
      <label>Concluída:</label>
      <input        type="checkbox"
        checked={completed}
        onChange={(e => setCompleted(e.target.checked)}
        aria-label="concluída"
      />
      <Button onClick={() => markAsCompleted(1)}>Marcar</Button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </>
  );
};

export default Feature;