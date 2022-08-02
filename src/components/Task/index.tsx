import styles from "./styles.module.css";

import { BsTrash } from "react-icons/bs";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";

interface TaskProps {
  deleteTask: Function;
  changeTaskStatus: Function;
  content: string;
  isComplete: boolean;
  id: string;
}

export const Task = ({
  changeTaskStatus,
  deleteTask,
  isComplete,
  content,
  id,
}: TaskProps) => {
  return (
    <div
      className={`${styles.container} ${
        isComplete ? styles.completedTask : undefined
      }`}
    >
      <button onClick={() => changeTaskStatus(id)}>
        {isComplete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </button>
      <p>{content}</p>
      <button onClick={() => deleteTask(id)}>
        <BsTrash />
      </button>
    </div>
  );
};
