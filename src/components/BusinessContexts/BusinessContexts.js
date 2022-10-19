import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import styles from "./BusinessContexts.module.css";
import BusinessIcon from "../Icons/BusinessIcon";
import BusinessList from "./BusinessList/BusinessList";
import LargeBusinessContext from "./LargeBusinessContext/LargeBusinessContext";
import { formatTitle, setDoneContextToActive } from "../../utils/utils";
import MainContext from "../../context/mainContext";
import { BUSINESSCONTEXT_STATUS } from "../../helpers/constants";

const BusinessContexts = () => {
  const { title } = useParams();
  const { tasks, setBusinessContexts, setCurrentContext } = useContext(MainContext);

  useEffect(() => {
    if(!tasks) return;
    const formatedTitle = formatTitle(title);
    const currentTask = tasks.find((task) => task.title === formatedTitle);
    setBusinessContexts(currentTask.businessContexts);
    setDoneContextToActive(currentTask.businessContexts, setBusinessContexts);
    const currentContext = currentTask.businessContexts.find(context => context.status === BUSINESSCONTEXT_STATUS.active)
    if(!currentContext) return setCurrentContext(currentTask.businessContexts[0]);
    setCurrentContext(currentContext);
  }, [tasks, title, setBusinessContexts, setCurrentContext]);

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
        <>
          <BusinessList />
          <LargeBusinessContext />
        </>
      </div>
    </div>
  );
};

export default BusinessContexts;
