import React from "react"
import "./Task.css"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Task <span className="card-taskname"></span></h3>
                    {task.goal}
                    <Link to={`/tasks/${task.id}`}>
                    <button>Task Details</button>
                    </Link>
                    <button type="button" onClick={() => handleDeleteTask(task.id)}>Remove</button>    
            </div>
        </div>
            
    )
}