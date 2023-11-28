import styles from "./Offers.module.css";
import Offer from "./Offer";
import { offers } from "../../Data/offers";

const Offers = () => {
    return (
        <section className={styles.offers} id="offers">
            <div className={styles.offersContainer}>
                <h2 className={styles.offersSubtitle}>
                    Czym zajmuje się nasza firma?
                </h2>
                <div className={styles.offersWrapper}>
                    {offers.map((item) => (
                        <Offer offer={item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Offers;
