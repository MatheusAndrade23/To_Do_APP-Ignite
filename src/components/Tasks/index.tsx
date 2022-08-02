import styles from "./styles.module.css";

import { Task } from "../Task";
import { RiFileListLine } from "react-icons/ri";

interface Task {
  content: string;
  id: string;
  isComplete: boolean;
}

interface TasksProps {
  deleteTask: Function;
  changeTaskStatus: Function;
  tasks: Task[];
}

export const Tasks = ({ tasks, deleteTask, changeTaskStatus }: TasksProps) => {
  const completedTasks = tasks.filter((task) => task.isComplete);
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>
          Tarefas Criadas: <span>{tasks.length}</span>
        </p>
        <p>
          Concluídas: <span>{completedTasks.length}</span>
        </p>
      </div>
      {tasks.length > 0 ? (
        <div className={styles.tasks}>
          {tasks.map((task) => (
            <Task
              isComplete={task.isComplete}
              deleteTask={deleteTask}
              changeTaskStatus={changeTaskStatus}
              content={task.content}
              id={task.id}
              key={task.id}
            />
          ))}
        </div>
      ) : (
        <div className={styles.empty}>
          <RiFileListLine />
          <p>Nenhuma tarefa cadastrada ainda...</p>
        </div>
      )}
    </div>
  );
};
