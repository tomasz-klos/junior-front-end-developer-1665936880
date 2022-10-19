import styles from "./SmallBusinessContext.module.css";
import { BUSINESSCONTEXT_STATUS } from "../../../helpers/constants";
import { formatDateToShort } from "../../../utils/utils";

const SmallBusinessContext = ({ businessContext }) => {
  const { created_at, author, status, title, content } = businessContext;

  const shortContent = `${content.substring(0, 110)}...`;
  const businessItemClass = `${styles.businessItem}
  ${status === BUSINESSCONTEXT_STATUS.new ? styles.businessItemNew : ""}
  ${
    status === BUSINESSCONTEXT_STATUS.active
      ? styles.businessItemActive
      : ""
  }`

  return (
    <div
      className={businessItemClass}
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
    </div>
  );
};

export default SmallBusinessContext;
