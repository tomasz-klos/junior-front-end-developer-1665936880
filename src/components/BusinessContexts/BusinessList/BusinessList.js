import SmallBusinessContext from "../SmallBusinessContext/SmallBusinessContext";
import styles from "./BusinessList.module.css";

const BusinessList = ({ data }) => {
    return (
        <div className={styles.businessList}>
            {data[3].businessContexts.map(element => <SmallBusinessContext key={element.id} businessContext={element} />)}
        </div>
    )
}

export default BusinessList;