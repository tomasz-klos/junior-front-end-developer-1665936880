import styles from "./Task.module.css";

import BlockedIcon from "../../Icons/BlockedIcon";
import ActiveIcon from "../../Icons/ActiveIcon";
import CompletedIcon from "../../Icons/CompletedIcon";

import { TASK_STATUS } from "../../../helpers/constants";

const Task = ({ task }) => {
    const { status, title } = task;

    const selectIconToDisplay = (status) => {
        switch (status) {
            case TASK_STATUS.active:
                return <ActiveIcon />;
            case TASK_STATUS.completed:
                return <CompletedIcon />;
            case TASK_STATUS.blocked:
                return <BlockedIcon />;
            default:
                return <BlockedIcon />;
        }
    }

    return (
        <div className={styles.taskItem}>
            <div className={styles.icon}>
                {selectIconToDisplay(status)}
            </div>
            <span className={`${styles.title} 
                ${
                    status === TASK_STATUS.active ? styles.active : ''
                }
                ${
                    status === TASK_STATUS.blocked ? styles.blocked : ''
                }
                `}>
                {title}
            </span>
        </div>
    )
}

export default Task;