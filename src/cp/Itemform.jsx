// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task = {}, completeTask, deleteTask, setTaskToEdit }) => {
  const { id, name = 'No Name', description = 'No Description', completed = false } = task;

  return (
    <div className={`task-item ${completed ? 'completed' : ''}`}>
      <div>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <div>
        <button onClick={() => completeTask(id)}>
          {completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => setTaskToEdit(task)}>Edit</button>
        <button onClick={() => deleteTask(id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
