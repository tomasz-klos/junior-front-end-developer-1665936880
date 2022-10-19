import styles from "./Header.module.css";
import userAvatar from "../../assets/userAvatar.avif";
import logo from "../../assets/logo.svg";

const Header = () => {

    return (
        <header className={styles.header}>
        <img src={logo} alt="nerds.family logo"/>
        <div className={styles.userAvatar}>
        <img className={styles.image} src={userAvatar} alt="user avatar" />
          </div>
      </header>
    )
}

export default Header;