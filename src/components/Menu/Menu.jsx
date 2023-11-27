import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <nav className={styles.navigation}>
            <div className={styles.container}>
                <a href="#" className={styles.companyName}>
                    moja firma
                </a>
                <ul className={styles.linksList}>
                    <li>
                        <a href="#specialists" className={styles.about}>
                            o nas
                        </a>
                    </li>
                    <li>
                        <a href="#offers" className={styles.offer}>
                            oferta
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.disabled}>
                            kontakt
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
