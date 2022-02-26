import React, { useState, useEffect } from 'react';
//import the components we will need
import { TaskCard } from './TaskCard';
import { getAllTasks,deleteTask } from '../../modules/TaskManager';
import { useNavigate } from 'react-router-dom';


export const TaskList = () => {
  // The initial state is an empty array
  const [tasks, setTasks] = useState([]);

  const navigate = useNavigate();

  const getTasks = () => {
    // After the data comes back from the API, we
    //  use the setTasks function to update state
    return getAllTasks().then(tasksFromAPI => {
        setTasks(tasksFromAPI)
    });
  };

  // got the tasks from the API on the component's first render
  useEffect(() => {
    getTasks();
  }, []);

  const handledeleteTask = id => {
    deleteTask(id)
    .then(() => getAllTasks().then(setTasks));
  };

  // Finally we use .map() to "loop over" the tasks array to show a list of task cards
  return (
    <div className="container-cards">
        <section className="section-content">
        <button type="button"
         className="btn"
         onClick={() => {navigate("/tasks/create")}}>
        New Task
        </button>
      </section>
      {tasks.map(task => 
      <TaskCard 
        key={task.id}
        task={task}
        handledeleteTask={handledeleteTask}/>
      )}
    </div>
  );
};
