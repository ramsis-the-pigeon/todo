import React from 'react'
import './TaskColumn.css'
import Todo from '../assets/direct-hit.png'
import TaskCard from './TaskCard'
const TaskColumn = ({state, icon, tasks, status, handleDelete}) =>{
    

    return (
        <section className="task_column">
            <h2 className='task_column_heading'>
                <img className='task_column_icon' src={icon} alt="" />
                {state}
            </h2>
            {
                tasks.map((task, index) => task.status === status && 
                <TaskCard 
                    key={index}
                    title={task.task} 
                    tags ={task.tags}
                    handleDelete={handleDelete}
                    index={index}
                />)
            }
            
        </section>
    )
}
export default TaskColumn