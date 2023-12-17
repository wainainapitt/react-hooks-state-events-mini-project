import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = React.useState(TASKS);
  const [deletedTasks, setDeletedTasks] = React.useState([]);

  const categories = CATEGORIES;

  function handleTaskDeletion(task) {
    setTasks((prevTasks) => prevTasks.filter((el) => el !== task));
    setDeletedTasks((prevDeleted) => prevDeleted.filter((el) => el !== task));
  }

  function handleCategorySelection(category) {
    setTasks((prevTasks) =>
      deletedTasks.filter((task) =>
        category === "All" ? true : task.category === category
      )
    );
  }

  function handleTaskFormSubmit(newObj) {
    setTasks((prevTasks) => {
      setDeletedTasks((prevDeleted) => [...prevDeleted, newObj]);
      return [...prevTasks, newObj];
    });
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        click={handleCategorySelection}
      />
      <NewTaskForm
        categories={categories}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList tasks={tasks} click={handleTaskDeletion} />
    </div>
  );
}

export default App;
