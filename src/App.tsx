import React, { useState, createContext, useContext } from 'react';
import { Task } from './types/index';
import Feature1 from './features/feature-1';
import Feature2 from './features/feature-2';
import Feature3 from './features/feature-3interface TaskContext {
  tasks: Task[];
 createTask: (task: Task) => void;
  updateTask: (task: Task => void;
  deleteTask: (id number) => void}

const TaskContext = createContext<TaskContext>({
  tasks: [],
  createTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
});

const App: React = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const createTask = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return task;
      }
      return t;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
      <div className="grid">
        <Feature1 />
        <Feature2 />
        <Feature3 />
      </div>
    </TaskContext.Provider>
  );
};

export default App;