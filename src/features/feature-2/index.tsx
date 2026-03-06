import React, { useState } from 'react';
 { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature2: React.FC = () => {
  [tasks, setTasks] = useState<Task[]>([]);
  const [priority, setPriority] = useState('');

  const updateTask = (id: number) => {
    const updatedTasks =.map((task) => {
      if (task.id === id) {
        return { ...task, priority };
      }
      return task;
    });
    setTasksTasks);
  };

  return (
    <div>
      <h2>Definir Prioridade</h2>
      <label>Prioridade:</label>
      <input
        type="text"
        value={priority}
        onChange={(e) =>Priority(e.target.value)}
        aria-label="prioridade"
      />
      <Button onClick={() => updateTask(1)}>Atualizar</Button      <ul>
        {tasks.map((task) => (
          <li={task.id}>{task.title}</li>
             </ul>
    </div>
  );
};

export default Feature2;