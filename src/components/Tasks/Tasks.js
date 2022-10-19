import styles from "./Tasks.module.css";

import Task from "./Task/Task";
import MainContext from "../../context/mainContext";
import { useContext } from "react";

const Tasks = () => {
  const { tasks } = useContext(MainContext);
  
  return (
    <>
      {tasks && (
        <div className={styles.container}>
          <div className={styles.header}>
            <span className={styles.title}>Your Tasks</span>
          </div>
          <div className={styles.tasks}>
            {tasks.map((task) => (
              <Task key={task.id} task={task} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Tasks;
