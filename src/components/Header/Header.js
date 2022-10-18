import styles from "./Header.module.css";
import provileImg from "../../assets/profile.avif";
import logo from "../../assets/logo.svg";
const Header = () => {

    return (
        <header className={styles.header}>
        <img src={logo} alt="logo"/>
        <img src={provileImg} alt="profile picture" />
      </header>
    )
}

export default Header;