import styles from "./BusinessContexts.module.css";
import BusinessIcon from "../Icons/BusinessIcon";
import BusinessList from "./BusinessList/BusinessList";
import { data } from "../../data";
import LargeBusinessContext from "./LargeBusinessContext/LargeBusinessContext";

const BusinessContexts = () => {

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
                <BusinessList data={data}/>
                <LargeBusinessContext businessContext={data[3].businessContexts[1]} />
            </div>
        </div>
    )
}

export default BusinessContexts;