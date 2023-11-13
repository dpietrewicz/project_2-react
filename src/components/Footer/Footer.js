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
            <div>Moja firma</div>
            <div className={styles.icons}>
                <FontAwesomeIcon icon={faTwitter} color="black" />
                <FontAwesomeIcon icon={faFacebook} color="black" />
                <FontAwesomeIcon icon={faInstagram} color="black" />
            </div>
        </footer>
    );
};

export default Footer;
