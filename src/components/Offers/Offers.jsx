import { offers } from "../../Data/offers";
import styles from "./Offers.module.css";

const Offers = () => {
    return (
        <section className={styles.container}>
            <h2 className={styles.offersTitle}>
                Czym zajmuje się nasza firma?
            </h2>
            <div className={styles.boxesContainer}>
                {offers.map((offer) => (
                    <div className={styles.box}>
                        <p>
                            {offer.name}
                            {offer.isNew ? (
                                <p className={styles.boxNewTag}>(nowość)</p>
                            ) : null}
                        </p>
                        {offer.isNew ? (
                            <div className={styles.dot}></div>
                        ) : null}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Offers;
