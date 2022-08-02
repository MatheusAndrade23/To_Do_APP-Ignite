import styles from "./styles.module.css";

import { ChangeEvent, FormEvent, useState } from "react";

import { IoRocketOutline } from "react-icons/io5";

interface HeaderProps {
  createTask: Function;
}

export const Header = ({ createTask }: HeaderProps) => {
  const [taskContent, setTaskContent] = useState("");

  const handleGetTaskContent = (e: ChangeEvent<HTMLInputElement>) => {
    setTaskContent(e.target.value);
  };

  const handleCreateTask = (e: FormEvent) => {
    e.preventDefault();
    createTask(taskContent);
    setTaskContent("");
  };

  return (
    <header className={styles.header}>
      <div>
        <IoRocketOutline />
        <strong>To Do List</strong>
      </div>
      <form className={styles.taskContainer}>
        <input
          type="text"
          placeholder="Digite sua nova tarefa..."
          onChange={handleGetTaskContent}
          value={taskContent}
          required
        />
        <button
          type="submit"
          onClick={handleCreateTask}
          disabled={taskContent.length === 0}
        >
          Criar
        </button>
      </form>
    </header>
  );
};
