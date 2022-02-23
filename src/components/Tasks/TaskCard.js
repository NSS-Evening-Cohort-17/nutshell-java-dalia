import React from "react"
import "./Task.css"
import { Link } from "react-router-dom";

export const TaskCard = ({ task, handleDeleteTask }) => {
    return (
        <div className="card">
            <div className="card-content">
                <h3>Name</h3>
                    {/* { task.userId?.name} */}
            </div>
        </div>
            
    )
}