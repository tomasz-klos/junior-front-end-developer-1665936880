import styles from "./Header.module.css";
import userAvatar from "../../assets/userAvatar.avif";
import logo from "../../assets/logo.svg";
const Header = () => {

    return (
        <header className={styles.header}>
        <img src={logo} alt="logo"/>
        <div className={styles.userAvatar}>
        <img className={styles.image} src={userAvatar} alt="profile picture" />
          </div>
      </header>
    )
}

export default Header;