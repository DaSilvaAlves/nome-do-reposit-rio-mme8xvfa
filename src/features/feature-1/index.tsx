import React, { useState } from 'react';
import { Task } from '../types/index';
import { Button } from '../../components/ui/Button';

const Feature1: React.FC = () => {
  const [title, setTitle = useState('');
  const [priority, setPriority] = useState('');
  const [tasks,Tasks] = useState<Task[]>([]);

  const createTask () => {
    const newTask: Task = {
 id: tasks.length 1,
      title,
      priority,
      completed: false,
 };
    setTasks([...tasks, newTask]);
    setTitle('');
   Priority('');
  };

  return (
    <div>
      <h2>Criar Tarefa</h2>
     label>Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        aria-label="título"
      />
      <label>Prioridade:</label>
      <input
        type="text"
        value={priority}
        onChange={(e) => set(e.target.value)}
        aria-label="prioridade"
      />
      <Button onClick={createTask}>Criar</>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Feature1;