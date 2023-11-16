import styles from "./Header.module.css";

const Header = () => {
    return (
        <header
            className={styles.container}
            style={{ backgroundImage: "url(/assets/background.jpeg)" }}
        >
            <div className={styles.headingTextBox}>
                <h1 className={styles.headingPrimary}>
                    <span className={styles.headingPrimaryMain}>
                        Nasza firma oferuje najwyższej jakości produkty.
                    </span>
                    <span className={styles.headingPrimarySub}>
                        Nie wierz nam na słowo - sprawdź
                    </span>
                </h1>

                <a href="#" className={styles.btn}>
                    oferta
                </a>
            </div>
        </header>
    );
};

export default Header;
