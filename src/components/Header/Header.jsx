import styles from "./Header.module.css";

const Header = () => {
    return (
        <header
            className={styles.container}
            style={{ backgroundImage: "url(/assets/hello.jpg)" }}
        >
            obrazek i info o firmie
        </header>
    );
};

export default Header;
