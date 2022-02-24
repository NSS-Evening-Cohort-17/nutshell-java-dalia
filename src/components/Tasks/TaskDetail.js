import React, { useState, useEffect } from "react";
import {useParams, useNavigate} from "react-router-dom"
import { getTaskById,deleteTask } from "../../modules/TaskManager";
import "./TaskDetail.css";

export const TaskDetail = () => {
  const [task, setTask] = useState({ goal: "", location: "", description:"",timeframe: "" });
  const [isLoading, setIsLoading] = useState(true);

  const {taskId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //gettaskById(id) from taskManager and hang on to the data; put it into state
    console.log("useEffect", taskId)
    getTaskById(taskId)
      .then(task => {
        setTask(task);
        setIsLoading(false);
      });
  }, [taskId]);

  const handleDelete = () => {
    //invoke the delete function in taskManger and re-direct to the task list.
    setIsLoading(true);
    deleteTask(taskId).then(() =>
      navigate("/tasks")
    );
  };

  return (
    <section className="task">
      <h3 className="task__goal">{task.goal}</h3>
      <div className="task__location">{task.location}</div>
      {/* What's up with the question mark???? See below.*/}
      <div className="task__description">Description: {task.description}</div>
      <div className="task__timeframe">Timeframe: {task.timeframe}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Remove
        </button>
    </section>
  );
};
