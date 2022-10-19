import styles from "./Layout.module.css";

import Header from "../Header/Header";
import Tasks from "../Tasks/Tasks";
import BusinessContexts from "../BusinessContexts/BusinessContexts";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Tasks />
        <BusinessContexts />
      </main>
    </div>
  );
};

export default Layout;