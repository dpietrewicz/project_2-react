import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitter,
    faFacebook,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div>Nazwa firmy - wszelkie prawa zastrzeżone, 2023</div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
        </footer>
    );
};

export default Footer;
