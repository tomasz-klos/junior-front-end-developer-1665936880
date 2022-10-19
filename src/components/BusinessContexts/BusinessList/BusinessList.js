import { useContext } from "react";
import MainContext from "../../../context/mainContext";
import SmallBusinessContext from "../SmallBusinessContext/SmallBusinessContext";
import styles from "./BusinessList.module.css";

const BusinessList = () => {
  const { businessContexts } = useContext(MainContext);

  return (
    <div className={styles.businessList}>
      {businessContexts &&
        businessContexts.map((element) => (
          <SmallBusinessContext key={element.id} businessContext={element} />
        ))}
    </div>
  );
};

export default BusinessList;
