import { offers } from "../../Data/offers";
import styles from "./Offers.module.css";

const Offers = () => {
    return (
        <section>
            <h2>Oferta firmy</h2>
            <div className={styles.boxesContainer}>
                {offers.map((offer) => (
                    <div className={styles.box}>
                        <p>{offer.name}</p>
                        {offer.isNew ? <p>Nowość!</p> : null}
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
