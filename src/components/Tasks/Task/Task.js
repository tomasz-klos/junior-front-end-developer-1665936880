import styles from "./Task.module.css";
import { TASK_STATUS } from "../../../helpers/constants";
import { formatTitleAsPath, selectIconToDisplay } from "../../../utils/utils";
import { Link } from "react-router-dom";

const Task = ({ task }) => {
  const { status, title } = task;
  const formatTitle = formatTitleAsPath(title);

  return (
    <div
      className={`${styles.container} ${
        status !== TASK_STATUS.blocked && styles.hover
      }`}
    >
      <Link
        to={`/tasks/${formatTitle}`}
        className={`${styles.taskItem} ${
          status === TASK_STATUS.blocked && styles.disabled
        }`}
      >
        <div className={styles.icon}>{selectIconToDisplay(status)}</div>
        <span
          className={`${styles.title} 
                ${status === TASK_STATUS.active ? styles.active : ""}
                ${status === TASK_STATUS.blocked ? styles.blocked : ""}
                `}
        >
          {title}
        </span>
      </Link>
    </div>
  );
};

export default Task;
