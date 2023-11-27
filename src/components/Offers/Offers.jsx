import styles from "./Offers.module.css";
import Offer from "./Offer";

const Offers = () => {
    return (
        <section className={styles.offers} id="offers">
            <h2 className={styles.offersSubtitle}>
                Czym zajmuje się nasza firma?
            </h2>
            <div className={styles.offersWrapper}>
                <Offer />
            </div>
        </section>
    );
};

export default Offers;
