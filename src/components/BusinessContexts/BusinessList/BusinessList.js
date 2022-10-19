import SmallBusinessContext from "../SmallBusinessContext/SmallBusinessContext";
import styles from "./BusinessList.module.css";

const BusinessList = ({ businessContexts }) => {

  return (
    <div className={styles.businessList}>
      {businessContexts.map((element) => (
        <SmallBusinessContext key={element.id} businessContext={element} />
      ))}
    </div>
  );
};

export default BusinessList;
