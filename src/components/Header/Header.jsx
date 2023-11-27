import styles from "./Header.module.css";

const Header = () => {
    return (
        <header
            className={styles.header}
            style={{ backgroundImage: "url(/assets/Mountains.jpg)" }}
        >
            <div className={styles.shadow}>
                <div className={styles.container}>
                    <h1 className={styles.headerTitle}>
                        Nasza firma oferuje najwyższej jakości produkty.
                    </h1>
                    <h2 className={styles.headerSubtitle}>
                        Nie wierz nam na słowo - sprawdź
                    </h2>

                    <a href="#" className={styles.offerBtn}>
                        oferta
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
