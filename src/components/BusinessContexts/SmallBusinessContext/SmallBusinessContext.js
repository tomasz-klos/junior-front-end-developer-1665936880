import styles from "./SmallBusinessContext.module.css";
import { BUSINESSCONTEXT_STATUS } from "../../../helpers/constants";
import { formatDateToShort, businessContextHandle } from "../../../utils/utils";
import { useContext } from "react";
import MainContext from "../../../context/mainContext";

const SmallBusinessContext = ({ businessContext }) => {
  const { created_at, author, status, title, content } = businessContext;
  const { businessContexts, setBusinessContexts } = useContext(MainContext);

  const shortContent = `${content.substring(0, 110)}...`;
  const businessItemClass = `${styles.businessItem}
  ${status === BUSINESSCONTEXT_STATUS.new ? styles.businessItemNew : ""}
  ${status === BUSINESSCONTEXT_STATUS.active ? styles.businessItemActive : ""}`;

  return (
    <button
      className={businessItemClass}
      onClick={() =>
        businessContextHandle(
          businessContexts,
          setBusinessContexts,
          businessContext
        )
      }
    >
      <div className={styles.businessInfo}>
        {status === BUSINESSCONTEXT_STATUS.new && (
          <div className={styles.newIcon}>new</div>
        )}
        <span className={styles.author}>{author}</span>
        <span className={styles.date}>{formatDateToShort(created_at)}</span>
      </div>
      <p
        className={`${styles.title} ${
          status === BUSINESSCONTEXT_STATUS.new ? styles.titleNew : ""
        }`}
      >
        {title}
      </p>
      <p className={styles.content}>{shortContent}</p>
    </button>
  );
};

export default SmallBusinessContext;
