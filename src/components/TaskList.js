import React from "react";
import Task from "./Task";

function TaskList({ tasks, handleDelete }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task
          text={task.text}
          handleDelete={handleDelete}
          category={task.category}
          key={task.text}
        />
      ))}
    </div>
  );
}

export default TaskList;
