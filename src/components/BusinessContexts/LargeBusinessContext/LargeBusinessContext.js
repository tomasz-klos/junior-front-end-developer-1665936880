import styles from "./LargeBusinessContext.module.css";
import userAvatar from "../../../assets/userAvatar.avif";
import { formatDateToLong, getTimeFromDate } from "../../../utils/utils";
import { useContext } from "react";
import MainContext from "../../../context/mainContext";

const LargeBusinessContext = () => {
  const { currentContext } = useContext(MainContext);
  if (!currentContext) return;
  const { title, author, created_at, content } = currentContext;

  return (
    <div className={styles.businessContext}>
      <p className={styles.title}>{title}</p>
      <div className={styles.container}>
        <div className={styles.userAvatar}>
          <img className={styles.image} src={userAvatar} alt="user avatar" />
        </div>
        <div className={styles.content}>
          <div className={styles.info}>
            <span className={styles.author}>{author}</span>
            <span className={styles.date}>{formatDateToLong(created_at)}</span>
            <span className={styles.time}>{getTimeFromDate(created_at)}</span>
          </div>
          <span className={styles.text}>{content}</span>
        </div>
      </div>
    </div>
  );
};

export default LargeBusinessContext;
