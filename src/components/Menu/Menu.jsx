import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <nav className={styles.container}>
            <div className={styles.menuTitle}>moja firma</div>
            <ul className={styles.menuElements}>
                <li>
                    <a href="#o_nas" className={styles.menuLink}>
                        o nas
                    </a>
                </li>
                <li>
                    <a href="#oferta" className={styles.menuLink}>
                        oferta
                    </a>
                </li>
                <li>
                    <a href="#kontakt" className={styles.menuLink}>
                        kontakt
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
