import { useEffect, useState } from "react";
import { useParams } from "react-router";

import styles from "./BusinessContexts.module.css";
import BusinessIcon from "../Icons/BusinessIcon";
import BusinessList from "./BusinessList/BusinessList";
import { data } from "../../data";
import { formatTitle } from "../../utils/utils";
import LargeBusinessContext from "./LargeBusinessContext/LargeBusinessContext";
import { BUSINESSCONTEXT_STATUS } from "../../helpers/constants";

const BusinessContexts = () => {
  const { title } = useParams();
  const [businessContexts, setBusinessContexts] = useState();
  const [activeContext, setActiveContext] = useState();

  useEffect(() => {
    if (!title) return;
    const formatedTitle = formatTitle(title);
    const arrayOfContexts = data.find(
      (element) => element.title === formatedTitle
    ).businessContexts;
    setBusinessContexts(arrayOfContexts);
    const context = arrayOfContexts.find(element => element.status === BUSINESSCONTEXT_STATUS.active);
    if (!context) return setActiveContext(arrayOfContexts[0]);
    setActiveContext(context);
  }, [title]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.box}>
          <button className={styles.button}>
            <BusinessIcon />
            <span className={styles.title}>Business Context</span>
          </button>
        </div>
      </div>
      <div className={styles.businessMain}>
        {activeContext && (
          <>
            <BusinessList businessContexts={businessContexts} />
            <LargeBusinessContext
              businessContext={activeContext}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default BusinessContexts;
