import styles from "./Tasks.module.css";

import { data } from "../../data";
import Task from "./Task/Task";

const Tasks = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span className={styles.title}>Your Tasks</span>
            </div>
            <div className={styles.tasks}>
                {data.map(task => <Task key={task.id} task={task} />
                )}
            </div>
        </div>
    )
}

export default Tasks;