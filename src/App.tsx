import { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Loading } from "./components/Loading";

interface Task {
  content: string;
  id: string;
  isComplete: boolean;
}

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredTasks = localStorage.getItem("tasks");

    if (recoveredTasks) {
      setTasks([...JSON.parse(recoveredTasks)]);
    }

    setLoading(false);
  }, []);

  const createTask = (taskContent: string) => {
    const newTask = {
      content: taskContent,
      id: uuid(),
      isCompleted: false,
    };
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
    setTasks((tasks) => [...tasks, newTask]);
  };

  const deleteTask = (TaskId: string) => {
    const tasksWithOutDeletedOne = tasks.filter(
      (task: Task) => task.id !== TaskId
    );
    localStorage.setItem("tasks", JSON.stringify(tasksWithOutDeletedOne));
    setTasks(tasksWithOutDeletedOne);
  };

  const changeTaskStatus = (TaskId: string) => {
    const tasksUpdated = tasks.map((task: Task) => {
      if (task.id === TaskId) {
        return { ...task, isComplete: !task.isComplete };
      }
      return task;
    });
    localStorage.setItem("tasks", JSON.stringify(tasksUpdated));
    setTasks(tasksUpdated);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header createTask={createTask} />
          <Tasks
            tasks={tasks}
            deleteTask={deleteTask}
            changeTaskStatus={changeTaskStatus}
          />
        </>
      )}
    </>
  );
}

export default App;
