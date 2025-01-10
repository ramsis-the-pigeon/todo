import React, { useEffect, useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import todoIcon from './assets/direct-hit.png'
import doing from './assets/glowing-star.png'
import done from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };

  console.log("tasks", tasks);
  
  return (
    <div className='app'>
      <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
        <TaskColumn state='To do' icon={todoIcon} tasks={tasks} status="todo"  handleDelete={handleDelete}/>
        <TaskColumn state='Doing'icon={doing} tasks={tasks} status="doing" handleDelete={handleDelete}/>
        <TaskColumn state='Done'icon={done} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
